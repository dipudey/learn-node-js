const express = require("express")
const movieRoutes = express.Router()

const connect = require("./../database/db")

movieRoutes.route("/")
    .get((req,res) => {
        res.send("All Movie List");
    })
    .post(async (req,res) => {
        const db = await connect();

        const data = {
            name: "howa",
            publish_date: "2022-10-25"
        }

        db.collection('movies').insertOne(data)
        res.json({"data": "Store new move"});
    })

movieRoutes.route("/:id")
        .get((req,res) => {
            res.send(`Fetching movie id: ${req.params.id}`)
        })
        .patch((req,res) => {
            res.send(`Move info updated`)
        })
        .delete((req,res) => {
            res.send(`Movie deleted`)
        })

module.exports = movieRoutes;