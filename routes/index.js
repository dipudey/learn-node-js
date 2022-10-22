const express = require("express")
const router = express.Router()
const path  = require("path")
const movieRoutes = require("./movieRoutes")


router.get('/',(req,res) => {
    res.render("index",{
        title: "Learn node js",
        message: "Welcome to node js world DIPU"
    })
    // res.sendFile(path.join(__dirname,"/../pages/home.html"));
})

router.use(movieRoutes)

router.all("/*",(req,res) => {
    res.sendFile(path.join(__dirname,"/../pages/404.html"));
})

module.exports = router
