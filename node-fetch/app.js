const express= require("express");
const colors = require("colors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

app.get("/text",(req,res)=>{
          // console.log("get method.");
          /**
           * plain text or HTML
           */
          res.end("hello express!",()=>console.log(`data ${req.method.green} ${req.url.blue} successful`));
});

app.get("/json",(req,res)=>{
          // console.log("get method.");
          /**
           * JSON
           */
          res.end(JSON.stringify({a:1,b:2}),()=>console.log(`data ${req.method.green} ${req.url.blue} successful`));
});

app.post("/postSimpleText",bodyParser.json(),(req,res)=>{
          /**
           * simple text or html post to server
           */
          req.on("data",(data)=>{
                    let data1 = data.toString();
                              let opeData={};
                              let arr = data1.split("=");
                              
                              for(let i=0;i<arr.length;i=i+2){
                                        opeData[arr[i]]=arr[i+1];
                              }
                             
                              res.end(JSON.stringify(opeData),()=>console.log(`data ${req.method.green} ${req.url.blue} successful`));
          })
          
          
});

app.post("/postJSON",(req,res)=>{
          /**
           * JSON string post to server
           */
          req.on("data",(data)=>{
                    let data1 = JSON.parse(data.toString());
                    // console.log(data1);
                    let data2={};
                    for(let prop in data1){
                              // console.log(prop);
                              data2[prop]=data1[prop]+2;
                    }
                    res.end(JSON.stringify(data2),()=>console.log(`data ${req.method.green} ${req.url.blue} successful`));
          });
})

app.post("/postParameters",(req,res)=>{
          /**
           * URLSearchParameters post to server
           */
          let body = req.body;
          res.end(JSON.stringify(body),()=>console.log(`data ${req.method.green} ${req.url.blue} successful`));
})

app.listen(8080,()=>{
          console.log(`listening on port 8080`);
});