const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;