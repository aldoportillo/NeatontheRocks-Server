const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    img: {
        type: Object,
        default: {},
    },
    description: {
        type: String,
        required: [true, "Please enter description"]
    },
    price: {
        type: Number,
        required: [true, "Please add macros"]
    },
    quantity: {
        type: Number,
        required: [true, "Please add quantity"]
    }
})

//later: add route that modifies quantity when order is placed

const Product = mongoose.model("Product", productSchema);

module.exports = Product