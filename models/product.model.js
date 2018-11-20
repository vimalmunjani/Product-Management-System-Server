const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId: String,
    productName: String,
    productCode: String,
    category: String,
    tags: String,
    releaseDate: String,
    price: Number,
    description: String,
    available: Number,
    threshold: Number,
    starRating: Number,
    imageUrl: String,
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;