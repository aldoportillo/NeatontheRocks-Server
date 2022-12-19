const express = require("express")
const {createCocktail, getCocktails} = require("../controllers/cocktailController")
const router = express.Router();

router.post("/api/cocktail", createCocktail)

router.get("/api/cocktails", getCocktails)

//router.get("/api/cocktails/:params", getCocktail)

module.exports = router