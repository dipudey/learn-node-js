const express = require("express")
const movieRoutes = express.Router()

movieRoutes.route("/movie")
    .get((req,res) => {
        res.send("All Movie List");
    })
    .post((req,res) => {
        res.json({"data": "Store new move"});
    })

movieRoutes.get("/movie/:id",(req,res) => {
    res.send(`Fetching movie id: ${req.params.id}`)
})

module.exports = movieRoutes;