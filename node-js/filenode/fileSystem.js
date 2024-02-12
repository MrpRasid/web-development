// const fs = require("fs");
import fs from "fs";


// import os from "os";

// fs.writeFileSync("./test.txt","Hello this is mamun");
// const reasult = fs.readFileSync("./test.txt","utf-8");
// console.log(reasult);

fs.readFile("./test.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);

    }else{
        console.log(result);
    }
});

// console.log(os.cpus().length);