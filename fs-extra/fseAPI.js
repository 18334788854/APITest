const fse = require("fs-extra");//邢健
const str = "邢健";

fse.readFile(__dirname+"/fseAPI.js").then((data)=>{
          console.log(data.toString());
}).catch((err)=>{
          console.error(err);
});

fse.copy(__dirname+"/fseAPI.js",__dirname+"/fseAPICopy.js")
.then(()=>console.log(`${__filename} copy successful`))
.catch((err)=>console.error(err));

