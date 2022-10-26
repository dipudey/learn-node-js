const express = require("express");
const { ObjectId } = require("mongodb");
const movieRoutes = express.Router()

const connect = require("./../database/db")

movieRoutes.route("/")
    .get(async (req,res) => {
        const db = await connect();
        const moviesData = await db.collection("movies").find().toArray();
        res.status(200).json({
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
        res.status(201).json({"data": "Store new move"});
    })

movieRoutes.route("/:id")
        .get(async (req,res) => {
            const _id = ObjectId(req.params.id)
            const db = await connect();
            const data = await db.collection("movies").find({_id}).toArray()
            res.status(200).json(data[0])
        })
        .patch(async (req,res) => {
            const _id = ObjectId(req.params.id)
            const db = await connect();
            const data = {
                name: req.body.name,
                publish_date: req.body.publish_date
            }
            await db.collection("movies").updateOne({_id},{$set: data})
            res.status(200).json({"data": "Update"})
        })
        .delete(async (req,res) => {
            const _id = ObjectId(req.params.id)
            const db = await connect();
            await db.collection("movies").deleteOne({_id})
            res.status(200).json({data:"movie deleted"})
        })

module.exports = movieRoutes;