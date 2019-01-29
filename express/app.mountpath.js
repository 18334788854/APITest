const express = require("express");
const app =express();
const admin = express();
const secret = express();

admin.get("/",(req,res)=>{
          console.log(admin.mountpath);
          res.send("Admin Homepage");
});

secret.get("/",(req,res)=>{
          console.log(secret.mountpath);
          res.send("Admin Secret");
});

admin.use("/secret",secret);
app.use(["/admin","/manager"],admin);

app.listen(3000,()=>{
          console.log(`test app.mountpath`);
})
