const express = require("express");
const app = express();
const admin = express();

admin.on("mount",(parent)=>{
          console.log("Admin Mounted");
          console.log(parent);
});
admin.get("/",(req,res)=>{
          res.send("Admin Homepage");
});

app.use("/admin",admin);

app.listen(3000);