const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.status(200).json(products)
})

const createProduct = asyncHandler(async (req,res) => {
    const {name, img, description, price, quantity} = req.body;

    //Remember to add image too but not yet

    if(!name || !img || !description || !price || !quantity) {
        res.status(400)
        throw new Error("Please fill in all fields")
    }

    const product = await Product.create({
        name,
        img,
        description, 
        price,
        quantity
    })

    res.status(201).json(product)
})

module.exports = {
    createProduct,
    getProducts
}