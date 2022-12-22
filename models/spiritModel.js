const mongoose = require("mongoose");

const spiritSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    type: {
        type: String,
        default: [true, "Please enter a category"],
    },
    calories: {
        type: Number,
        required: [true, "Please add calories"]
    },
    ethanol: {
        type: Number,
        required: [true, "Please add ethanol"]
    },
    fat: {
        type: Number,
        required: [true, "Please add fat"]
    },
    carb: {
        type: Number,
        required: [true, "Please add carbs"]
    },
    sugar: {
        type: Number,
        required: [true, "Please add sugar"]
    },
    addedSugar: {
        type: Number,
        required: [true, "Please add added sugar"]
    },
    protein: {
        type: Number,
        required: [true, "Please add protein"]
    },
    proof: {
        type: Number,
        required: [true, "Please add proof"]
    },
})

const Spirit = mongoose.model("Spirit", spiritSchema);

module.exports = Spirit