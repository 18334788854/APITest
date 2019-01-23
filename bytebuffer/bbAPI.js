const ByteBuffer = require("bytebuffer");
const Buffer = require("buffer").Buffer;

let buf = Buffer.from("xingjian","utf8");
console.log(Buffer.from("xingjian","utf8"));
console.log(`buf : ${buf}`);
let bb = new ByteBuffer(buf.length,true);
for(let i=0;i<buf.length;i++){
          bb.writeByte(buf[i]);
}
bb.flip();
console.log(`bb : ${bb}`);

console.log(bb.toString(),bb.toString("hex"));
console.log(Buffer.from(bb.toString("hex")),Buffer.from(bb.toString("hex"),"hex"));