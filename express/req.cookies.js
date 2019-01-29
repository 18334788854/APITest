const app = require("express")();
const cookies = require("cookie-parser");
app.use(cookies());
app.get("/hello",(req,res)=>{
    console.log(req.cookies,req.hostname,req.ip,req.ips,req.method,req.path,req.originalUrl,req.query,req.route,req.secure,req.fresh,req.stale,req.subdomains,req.xhr);
    res.send("<h1>hello world</h1>");
});

app.listen(3000);