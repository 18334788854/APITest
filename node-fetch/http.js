const http = require("http");

const server = http.createServer(function(req,res){
          
          if(req.url==="/postSimpleText"){
                    /**
                     * post plain text or html
                     */
                    req.on("data",(data)=>{
                              let data1 = data.toString();
                              let opeData={};
                              let arr = data1.split("=");
                              
                              for(let i=0;i<arr.length;i=i+2){
                                        console.log(i);
                                        opeData[arr[i]]=arr[i+1];
                              }
                             
                              res.end(JSON.stringify(opeData),()=>console.log(`data send /postSimpleText successful`));
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
                              console.log(data1);
                              let data2={};
                              for(let prop in data1){
                                        // console.log(prop);
                                        data2[prop]=data1[prop]+2;
                              }
                              res.end(JSON.stringify(data2),()=>console.log(`data send /postJSON successful`));
                    });
                    req.on("end",()=>{
                              
                    })     
          }
});

server.listen(3000,()=>console.log(`listening on port 3000`));