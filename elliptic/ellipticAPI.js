const elliptic = require("elliptic");
const ed = elliptic.eddsa("ed25519");
const sha = require("sha.js");
// const Buffer = require("buffer");

const hash = new sha.sha256().update("xingjian123","utf8").digest();
console.log(hash);

const key = ed.keyFromSecret(hash);
console.log(key);

console.log(Buffer.from(key.getPublic()).toString("hex"));