import cat_food from "../assets/product_9.jpeg";
import cat_toy from "../assets/product_10.jpeg";
import cat_bed from "../assets/product_11.jpeg";
import cat_collar from "../assets/product_12.jpeg";
import dog_crate from "../assets/product_13.jpeg";
import dog_harness from "../assets/product_14.jpeg";
import dog_training_pads from "../assets/product_15.jpeg";
import dog_dental_chews from "../assets/product_16.jpeg";


const new_collections = [
    {
        category: "Cat",
        id: 1,
        name: "Cat Food",
        image: cat_food,
        new_price: 10.99,
        old_price: 12.99,
        description: "Premium cat food for your furry friend.",
    },
    {
        category: "Cat",
        id: 2,
        name: "Cat Toy",
        image: cat_toy,
        new_price: 5.99,
        old_price: 7.99,
        description: "Interactive toys to keep your cat entertained.",
    },
    {
        category: "Cat",
        id: 3,
        name: "Cat Bed",
        image: cat_bed,
        new_price: 20.99,
        old_price: 24.99,
        description: "Cozy beds for your cat to relax in.",
    },
    {
        category: "Cat",
        id: 4,
        name: "Cat Collar",
        image: cat_collar,
        new_price: 8.49,
        old_price: 9.99,
        description: "Stylish collars for your fashionable cat.",
    },
    {
        category: "Dog",
        id: 21,
        name: "Dog Crate",
        image: dog_crate,
        new_price: 45.99,
        old_price: 49.99,
        description: "Spacious crates for your furry companion.",
    },
    {
        category: "Dog",
        id: 22,
        name: "Dog Harness",
        image: dog_harness,
        new_price: 22.99,
        old_price: 25.99,
        description: "Comfortable harnesses for walking your dog.",
    },
    {
        category: "Dog",
        id: 23,
        name: "Dog Training Pads",
        image: dog_training_pads,
        new_price: 18.49,
        old_price: 20.99,
        description: "Absorbent pads for potty training your dog.",
    },
    {
        category: "Dog",
        id: 24,
        name: "Dog Dental Chews",
        image: dog_dental_chews,
        new_price: 11.99,
        old_price: 13.99,
        description: "Dental chews to promote oral health in dogs.",
    },
];

export default new_collections;

