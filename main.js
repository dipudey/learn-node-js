const express = require("express")
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser')
app.use(bodyParser.json())

// add routes file
const routes = require("./routes/index")
app.use(routes)

// define the template engine 
app.set('view engine', 'pug')




app.listen(PORT,() => {
    console.log(`Server is running at localhost:${PORT}`);
})