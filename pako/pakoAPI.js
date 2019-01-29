const pako = require("pako");
const input = new Uint8Array();

const output = pako.deflate(input);

const compressed = new Uint8Array();
try{
          let result = pako.inflate(compressed);
}catch(err){
          console.error(err);
}