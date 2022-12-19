const mongoose = require("mongoose");

const cocktailSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    specs: {
        type: [String],
        required: [true, "Please add specs"]
    }
})

const Cocktail = mongoose.model("Cocktail", cocktailSchema);

module.exports = Cocktail