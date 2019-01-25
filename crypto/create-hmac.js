/**
 * @template create-hmac
 * digest()或read()后，需要重新构建Hmac对象
 */
const createHmac = require("create-hmac");
let hmac = createHmac("sha256",Buffer.from("secretKey"));
hmac.update("xj123");
console.log(hmac.digest());

hmac = createHmac("sha256",Buffer.from("secretKey"));
hmac.write("xj123");
hmac.end();
console.log(hmac.read());