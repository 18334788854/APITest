/**
 * 随机生成密钥
 */

const Mnemonic = require("bitcore-mnemonic");

const code = new Mnemonic(Mnemonic.Words.ENGLISH);

console.log(code.toString().length);