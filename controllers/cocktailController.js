const asyncHandler = require('express-async-handler');
const Cocktail = require('../models/cocktailModel')

const getCocktails = asyncHandler(async (req, res) => {
    const cocktails = await Cocktail.find({})
    res.status(200).json(cocktails)
})

const createCocktail = asyncHandler(async (req,res) => {
    const {name, specs, instructions, description} = req.body;

    //Remember to add image too but not yet

    if(!name || !specs || !instructions || !description) {
        res.status(400)
        throw new Error("Please fill in all fields")
    }

    const cocktail = await Cocktail.create({
        name,
        specs,
        instructions, 
        description
    })

    res.status(201).json(cocktail)
})

module.exports = {
    createCocktail,
    getCocktails
}