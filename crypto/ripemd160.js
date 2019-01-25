/**
 * @template ripemd160
 * 
 */
const RIPEMD160 = require("ripemd160");

console.log(new RIPEMD160().update('42').digest('hex'))
 
var ripemd160stream = new RIPEMD160()
ripemd160stream.end('42')
console.log(ripemd160stream.read().toString('hex'))