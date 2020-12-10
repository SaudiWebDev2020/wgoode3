const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categories: [ CategorySchema ]
}, {timestamps: true});

module.exports.Category = mongoose.model("Category", CategorySchema);
module.exports.Product = mongoose.model("Product", ProductSchema);