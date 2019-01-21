const BigNumber = require("bignumber.js");

const avg = new BigNumber(10);

const amount = avg.minus(1).plus(Math.random().toString()).toFixed(8);

console.log(amount);