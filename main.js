const express = require("express")
const app = express();

const port = 3000;

app.get('/',(req,res) => {
    res.send("Hello world")
})

/* app.get("/movie",(req,res) => {
    res.send("All Movie List");
}) 

app.post("/movie",(req,res) => {
    res.json({"data": "Store new move"});
}) */


app.route("/movie")
    .get((req,res) => {
        res.send("All Movie List");
    })
    .post((req,res) => {
        res.json({"data": "Store new move"});
    })

app.get("/movie/:id",(req,res) => {
    res.send(`Fetching movie id: ${req.params.id}`)
})

app.all("/*",(req,res) => {
    res.send("Page not found");
})



app.listen(port,() => {
    console.log(`Server is running at localhost:${port}`);
})