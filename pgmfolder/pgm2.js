var http = require("http");
http.createServer((req,res)=>{
    res.write("<h1>Welcome to node js</h1>")
}).listen(1234)
console.log("port listening at 1234")