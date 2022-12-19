const mongoose = require("mongoose");

const cocktailSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    specs: {
        type: [Object],
        required: [true, "Please add specs"]
    },
    instructions: {
        type: [String],
        required: [true, "Please add Instructions"]
    },
    description: {
        type: String,
        required: [true, "Please enter description"]
    },
})

const Cocktail = mongoose.model("Cocktail", cocktailSchema);

module.exports = Cocktail