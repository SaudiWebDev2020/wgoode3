console.log("inside of car.models.js");

const mongoose = require("mongoose");

// TODO: validations
const CarSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    features: []
}, {timestamps: true});

const Cars = mongoose.model("Cars", CarSchema);

module.exports = Cars;