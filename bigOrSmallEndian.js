let buffer = new ArrayBuffer(8);
let unit32 = new Uint32Array(buffer);
unit32[0]=1;
console.log(buffer,unit32);
let unit8 = new Uint8Array(buffer,0,1);
console.log(unit8);
console.log(Number(unit8.toString())===1);