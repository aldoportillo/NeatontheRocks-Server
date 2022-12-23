const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cocktailRoutes = require('./routes/cocktailRoutes')
const spiritRoutes = require('./routes/spiritRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()

const PORT = process.env.PORT || 5000;

mongoose
    .set("strictQuery", false)
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on Port ${PORT}`);
        })
    })
    .catch((err) => console.log(err))

app.use(express.json());

app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use(cocktailRoutes)
app.use(spiritRoutes)
app.use(productRoutes)

app.get("/", (req, res) => {
    res.send("<h1>Neat on the Rocks Server -- Please Leave</h1>")
})