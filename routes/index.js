const express = require("express")
const router = express.Router()
const movieRoutes = require("./movieRoutes")


router.get('/',(req,res) => {
    res.send("Hello world")
})

router.use(movieRoutes)

router.all("/*",(req,res) => {
    res.send("Page not found");
})

module.exports = router
