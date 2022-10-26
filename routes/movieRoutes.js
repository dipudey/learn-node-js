const express = require("express")
const movieRoutes = express.Router()

const connect = require("./../database/db")

movieRoutes.route("/")
    .get(async (req,res) => {
        const db = await connect();
        const moviesData = await db.collection("movies").find().toArray();
        res.json({
            data: moviesData
        })
    })
    .post(async (req,res) => {
        const db = await connect();

        const data = {
            name: req.body.name,
            publish_date: req.body.publish_date
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