const ZSchema = require("z-schema");
const options ={};
const schema = require("./schema");
const obj = {a:"xingjian",b:101};
const validator = new ZSchema(options);
console.log(validator.validateSchema(schema));
console.log(validator.validate(obj,schema));
