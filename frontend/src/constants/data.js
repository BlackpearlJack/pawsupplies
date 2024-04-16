import cat_toy from '../assets/product_1.jpeg'
import cat_carrier from '../assets/product_2.jpeg'
import dog_scratcher from '../assets/product_3.jpeg'
import dog_toy from '../assets/product_4.jpeg'

const data_product = [
    {
        category: "Cat",
        id: 29,
        name: "Cat Toy",
        image: cat_toy,
        new_price: 17.99,
        old_price: 19.99,
        description: "Discover the perfect interactive cat toy to keep your furry friend entertained and active. Our durable and engaging cat toys promote healthy play and mental stimulation. ", // Add description property
    },
    {
        category: "Cat",
        id: 8,
        name: "Cat Carrier",
        image: cat_carrier,
        new_price: 32.99,
        old_price: 36.99,
        description: "Discover our range of comfortable and secure cat carriers designed to make travel stress-free for you and your feline companion. Explore durable and stylish carriers for safe transportation.", // Add description property
    },
    {
        category: "Dog",
        id: 32,
        name: "Dog Scratcher",
        image: dog_scratcher,
        new_price: 9.99,
        old_price: 11.49,
        description: "Keep your dog's claws healthy and entertained with our durable and entertaining dog scratchers. Discover a range of options designed to satisfy your dog's natural scratching instincts.", // Add description property
    },
    {
        category: "Dog",
        id: 14,
        name: "Dog Toy",
        image: dog_toy,
        new_price: 17.99,
        old_price: 19.99,
        description: "Explore our collection of fun and durable dog toys designed to provide hours of engaging playtime for your canine companion. From chew toys to fetch toys, find the perfect toy for your dog.", // Add description property
    },
];

export default data_product;