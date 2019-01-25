const MD5 = require("md5.js");
/**
 * @template md5.js
 * @todo     传统使用方式
 */
let md5_1 = new MD5().update("xj123").digest("hex");
console.log(md5_1);

let md5_3 = new MD5().update("xj123").digest();
console.log(md5_3);
/**
 * @ouput   MD5 instance
 */
let md5_5 = new MD5().update("xj123");
console.log(md5_5);
/**
 * @template md5.js
 * @todo     流式
 */
let md5Stream = new MD5();
md5Stream.end("xj123");
let md5_2 = md5Stream.read().toString("hex");
console.log(md5_2);

md5Stream = new MD5();
md5Stream.end("xj123");
let md5_4 = md5Stream.read();
console.log(md5_4);
