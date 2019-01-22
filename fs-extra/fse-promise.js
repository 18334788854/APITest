const fse = require("fs-extra");//邢健

async function fsetest(){
          return fse.readFile(__dirname+"/fseAPI.js");
}

console.log(fsetest());

console.log("******************");

