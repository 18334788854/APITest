const crypto = require("crypto");
const sha = require("sha.js");
const md5 = require("md5.js");
const string = "Hello world";

let hash1 = crypto.createHash("sha256").update(string).digest("hex");
let hash2 = new sha.sha256().update(string).digest("hex");

let hash3 = crypto.createHash("md5").update(string).digest("hex");
let hash4 = new md5().update(string).digest("hex");

console.log(`crypto sha256's hex:${hash1}
sha256.js hex:${hash2}
result:${hash1===hash2}`);
console.log(`crypto md5's hex:${hash3}
md5.js hex:${hash4}
result:${hash3===hash4}`);

