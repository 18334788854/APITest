const fs = require("fs");
const str = "邢健";

fs.readFile(__dirname+"/fsAPI.js",function(err,data){
          if(err){
                    console.error(err);
          }else{
                    console.log(data.toString());
          }
});

fs.copyFile(__dirname+"/fsAPI.js",__dirname+"/fsAPICopy.js",(err)=>{
          if(err){
                    console.error(err);
          }else{
                    console.log(`${__filename} copy successful`);
          }
})