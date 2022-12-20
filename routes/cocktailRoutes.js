const express = require("express")
const {createCocktail, getCocktails, getCocktail} = require("../controllers/cocktailController")
const router = express.Router();

router.post("/api/cocktail", createCocktail)

router.get("/api/cocktails", getCocktails)

router.get("/api/cocktails/:id", getCocktail)

module.exports = router