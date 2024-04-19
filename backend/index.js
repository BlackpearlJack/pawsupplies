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
        profile_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schems for creating products

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
        required: true,
    },
})

app.post("/addproduct",async(req,res)=>{
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        description: req.body.description,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        available: req.body.available,
    })
})

app.listen(port,(error)=>{
    if (!error){
        console.log('Server is running on port:'+port);
    }
    else{
        console.log('Error:'+error);
    }
})