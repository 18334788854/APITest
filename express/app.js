const express = require("express");
const app = express();
const config = require("./config");
const path = require("path");

app.use("/static",express.static("public",config.staticOptions));

app.use("/",function(req,res){
          res.redirect("/static/hello");
});


app.listen(3000,()=>{
          console.log(`listening on port 3000`);
});
