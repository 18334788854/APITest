const fs = require("fs");
let rs = fs.createReadStream("./classTest.js");
let chunks=[];
let size=0;
rs.on("data",(data)=>{
          chunks.push(data);
          size+=chunks.length;
})

rs.on("end",()=>{
          console.log(chunks.toString(),chunks);
})