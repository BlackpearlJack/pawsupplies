const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { error } = require('console');
const { type } = require('os');
const { request} = require("express");
const argon2 = require('argon2');

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://lestercarlyle:N1kl%40us99@cluster0.c2zbmo6.mongodb.net/pawsupplies");

// API creation
app.get("/",(req,res)=>{
    res.send("Express App is running");
})


// image storage engine

const stg = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: stg});

app.use('/images/', express.static('upload/images')) // corrected line

// Creating Upload Endpoint for image

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schemas for creating products
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
})

// Creating API for adding products
app.post("/addproduct",async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        description: req.body.description,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    try {
        await product.save();
        console.log("Product added successfully");
        res.json({
            success: true,
            name: req.body.name,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error'+error });
    }
})

// Creatin API for deleting a product
app.post("/removeproduct", async (req,res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Product deleted successfully");
    res.json({
        success: true,
        name:req.body.name,
    });
})

// Creating API for getting all products
app.get("/allproducts", async (req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched successfully");
    res.send(products);
})

// Schema for User model
const Users = mongoose.model("Users",{
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
    },
    cartData:{
        type: Object,
    },
    date:{
        type: Date,
        default: Date.now,
    }

})


// Creating Endpoint for registering user
app.post('/signup', async (req,res) => {

    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success: false, message: "User already exists with that email address"});
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    // Hash the password
    const hashedPassword = await argon2.hash(req.body.password);

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: hashedPassword, // Store the hashed password
        cartData: cart,
    })

    await user.save();

    const data = {
        user: {
            id: user.id,
        }
    }

    const token = jwt.sign(data, "secret");
    res.json({success: true, token: token});
})

// Creating endpoint for user login
app.post('/login', async (req,res) => {
    let user = await Users.findOne({email:req.body.email});
    if(user){
        // Compare the provided password with the hashed password in the database
        const passCompare = await argon2.verify(user.password, req.body.password);
        if (passCompare){
            const data = {
                user: {
                    id: user.id,
                }
            }
            const token = jwt.sign(data, "secret");
            res.json({success: true,token});
        }
        else {
            res.json({success: false, message: "Wrong Password"});
        }
    }
    else {
        res.json({success: false, message: "Invalid credentials"});
    }
})

//creating endpoint for new collection
app.get("/newcollections", async(req,res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("New Collection fetched successfully");
    res.send(newcollection);
})

//creating endpoint for popular collection

app.get("/popularcollections", async(req,res) => {
    let products = await Product.find({});
    let popularcollection = products.slice(0,4);
    console.log("Popular Collection fetched successfully");
    res.send(popularcollection);

})
// creating middleware to fetch user

const fetchUser = async (req,res,next) => {
    const token = req.header('auth-token');
    if (!token){
        res.status(401).json({message: "Please authenticate using a valid token"});
    }
    else {
        try {
            const data = jwt.verify(token, "secret");
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).json({message: "Please authenticate using a valid token"});
        }
    }
}

// creating endpoint for adding products to cartdata
app.post("/addtocart", fetchUser, async(req,res) => {
    console.log("added", req.body.itemId)
    let userDate = await Users.findOne({_id:req.user.id});
    userDate.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData: userDate.cartData});
    res.send("Product added to cart successfully");
});

// creating endpoint for removing products from cart
app.post("/removefromcart", fetchUser, async(req,res) => {

    let userDate = await Users.findOne({_id:req.user.id});
    console.log("removed", req.body.itemId)
    if(userDate.cartData[req.body.itemId] > 0)
        userDate.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData: userDate.cartData});
    res.send("Product removed from cart successfully");
});

// creating endpoint for getting cart data
app.post("/getcart", fetchUser, async (req,res) =>{
    console.log("get cart data")
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})
// connecting to the server
app.listen(port,(error)=>{
    if (!error){
        console.log('Server is running on port:'+port);
    }
    else{
        console.log('Error:'+error);
    }
})