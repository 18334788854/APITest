const http = require("http");
const colors = require("colors");
const queryParser = require("./queryParser");

const server = http.createServer(function(req,res){
          if(req.url==="/text"){
                    /**
                     * get plain text or html
                     */
                    res.end("hello http!",()=>console.log(`data ${req.method.green} ${req.url.blue} successful`));
          }
          if(req.url==="/json"){
                    /**
                     * get json
                     */
                    res.end(JSON.stringify({a:1,b:2}),()=>console.log(`data ${req.method.green} ${req.url.blue} successful`));
          }
          if(req.url==="/postSimpleText"){
                    /**
                     * post plain text or html
                     */
                    req.on("data",(data)=>{
                              let data1 = data.toString();
                              let opeData={};
                              let arr = data1.split("=");
                              
                              for(let i=0;i<arr.length;i=i+2){
                                        // console.log(i);
                                        opeData[arr[i]]=arr[i+1];
                              }
                             
                              res.end(JSON.stringify(opeData),()=>console.log(`data ${req.method.green} ${req.url.blue} successful`));
                    });
                    req.on("end",()=>{
                              
                    })     
          }
          if(req.url==="/postJSON"){
                    /**
                     * post json
                     * must use JSON.parse method
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
                    req.on("end",()=>{
                              
                    })     
          }

          if(req.url==="/postParameters"){
                    req.on("data",(data)=>{
                              let data1 = data.toString();
                              let data2 = queryParser(data1);
                              res.end(JSON.stringify(data2),()=>console.log(`data ${req.method.green} ${req.url.blue} successful`));
                    })
          }
});

server.listen(3000,()=>console.log(`listening on port 3000`));