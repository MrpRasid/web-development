const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) =>{
    // console.log(req.headers);
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    fs.appendFile("log.txt",log,(err,data) =>{

        switch(req.url){
            case"/":
            res.end("Home page");
            break;

            case"/about":
            res.end("I am mamun Rasid an Engineer");
            break;

            default:
                res.end("404 Not found");
        }

       
    });

});

myServer.listen(3000,()=> console.log("server Started"));