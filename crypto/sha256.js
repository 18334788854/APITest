const SHA = require("sha.js");
const Transform = require("stream").Transform;
const inherits = require("inherits");
// inherits(SHA.sha256,Transform);
/**
 * @template sha256
 * @todo     传统使用方式
 */
let sha256_1 = new SHA.sha256().update("xj123").digest("hex");
console.log(sha256_1);

let sha256_3 = new SHA.sha256().update("xj123").digest();
console.log(sha256_3);
/**
 * @template sha256.js
 * @todo     流式
 * @error    sha256.js模块无流式
 */
let sha256Stream = SHA("sha256");
sha256Stream.end("xj123");
let sha256_2 = sha256Stream.read().toString("hex");
console.log(sha256_2);

sha256Stream = SHA("sha256");
sha256Stream.end("xj123");
let sha256_4 = sha256Stream.read();
console.log(sha256_4);
