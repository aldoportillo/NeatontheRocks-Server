const express = require("express")
const {createSpirit, getSpirits} = require("../controllers/spiritController")
const router = express.Router();

router.post("/api/spirit", createSpirit)

router.get("/api/spirits", getSpirits)

module.exports = router