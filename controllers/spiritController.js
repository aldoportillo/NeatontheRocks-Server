const asyncHandler = require('express-async-handler');
const Spirit = require("../models/spiritModel")

const getSpirits = asyncHandler(async (req, res) => {
    const spirits = await Spirit.find({})
    res.status(200).json(spirits)
})

const createSpirit = asyncHandler(async (req,res) => {
    const {name, type, calories, ethanol, fat, carb, sugar, addedSugar, protein, proof} = req.body;

    if(!name || !type || !calories || !ethanol || !fat || !carb || !sugar || !addedSugar || !protein || !proof) {
        res.status(400)
        throw new Error("Please fill in all fields")
    }

    const spirit = await Spirit.create({
        name, type, calories, ethanol, fat, carb, sugar, addedSugar, protein, proof
    })

    res.status(201).json(spirit)
})

module.exports = {
    getSpirits,
    createSpirit
}
