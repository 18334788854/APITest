const express = require("express");
const app = express();
const config = require("./config");
const path = require("path");
const fse = require("fs-extra");
const fs = require("fs");
/**
 * express engines
 */
app.engine("ntl",function(filepath,options,callback){
          // fs.readFile(filepath,function(err,content){
          //           if(err){
          //                     return callback(err);
          //           }else{
                              // let rendered = content.toString().replace("#title#",`<title>${options.title}</title>`).replace("#messages#",`<h1>${options.messages}</h1>`);
                              // return callback(err,rendered);
          //           }
          // });
          fse.readFile(filepath).then(content=>{
                    let rendered = content.toString().replace("#title#",`<title>${options.title}</title>`).replace("#messages#",`<h1>${options.messages} by xingjian</h1>`);
                    return callback(null,rendered);
          }).catch(err=>{
                    return callback(err);
          })
});
app.set("views",path.join(__dirname,"./views"));
app.set("view engine","ntl");
/**
 * 打印访问时间的中间件
 */
app.use(function(req,res,next){
          console.log(`Time:${Date.now()}`);
          next();
});
/**
 * 静态文件
 */
app.use("/static",express.static(path.join(__dirname,"public"),config.staticOptions));
/**
 * 首页
 */
app.get("/",function(req,res,next){
          res.sendFile(path.join(__dirname,"./public/hello.html"));        
});
/**
 * 测试模板引擎
 */
app.get("/index",function(req,res,next){
          res.render("index",{title:"hey",messages:"Hello world!"});
})
/**
 * 测试next('route')用法
 */
app.get("/user/:id",(req,res,next)=>{
          if(req.params.id==="0"){
                    next("route");
          }else{
                    next();
          }
},(req,res,next)=>{
          res.send(`regular ${req.params.id}`);
});
app.get("/user/:id",(req,res,next)=>{
          res.send(`special ${req.params.id}`);
})
/**
 * 监听3000端口
 */
app.listen(3000,()=>{
          console.log(`listening on port 3000`);
});
