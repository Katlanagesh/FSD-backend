const express= require("express")
const appServer = express();


// inject all the controllers
appServer.use("/auth", require("g:/Food/backend/Controllers/User.Controller"));

module.exports = appServer;