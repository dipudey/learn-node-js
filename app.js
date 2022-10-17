const http = require("http")
const fs = require('node:fs');

const PORT = 3000;

const server = http.createServer((request,response) => {
    /* res.writeHead(200,{"Content-Type": "application/json"});
    res.end(
        JSON.stringify({
            data: "Hello world"
        })
    ); */
   

    if(request.url === "/") {
        response.writeHead(200,{"Content-Type": "text/html"})
        fs.readFile("pages/home.html",'utf8',(error,data) => {
            if(error) throw error;
            response.write(data);
            response.end();
        })
    } else if(request.url === "/about") {
        fs.readFile("pages/about.html","utf8",(error,data) => {
            if(error) throw error;

            response.write(data)
            response.end();
        })
    } else {
        fs.readFile("pages/404.html","utf8",(error,data) => {
            if(error) throw error;

            response.write(data);
            response.end();
        })
    }


});

console.log(`Server is running on 127.0.0.1:${PORT}`)

server.listen(PORT)