const express = require("express")
const {createProduct, getProducts} = require("../controllers/productController")
const router = express.Router();

router.post("/api/product", createProduct)

router.get("/api/products", getProducts)

module.exports = router