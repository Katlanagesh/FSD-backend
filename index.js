const express= require('express')
const nodeserver = express();
const PORT = 5000;
const HOST = "localhost"

// inject app server
nodeserver.use('/', require("./app"))


// configre the mddle wares
// inject nnode application 

nodeserver.listen(PORT, HOST,()=>{
    require("./dbConfig");
})