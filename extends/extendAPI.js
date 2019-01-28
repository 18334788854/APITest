const extend = require("extend");

const obj1 = extend({},{a:2,b:1},{a:1});
const obj2 = extend(true,{},{a:{b:1}},{a:{c:2}});

console.log(obj1,obj2);