const fetch = require("node-fetch");
const {URLSearchParams} = require("url");
const params = new URLSearchParams();
params.append("i",9);
params.append("j",10);

const HOSTLIST = ["http://127.0.0.1:3000","http://127.0.0.1:8080"];
// const HOSTLIST = ["http://127.0.0.1:3000"];

HOSTLIST.map(testAPI);
function testAPI(HOST){
          fetch(HOST+"/text").then(res=>res.text()).then(body=>console.log(body));
          fetch(HOST+"/json").then(res=>res.json()).then(json=>console.log(json));
          fetch(HOST+"/postSimpleText",{method:"POST",body:"a=1"}).then(res=>res.json()).then(json=>console.log(json));
          fetch(HOST+"/postJSON",{method:"post",body:JSON.stringify({c:3,d:4}),headers:{"Content-Type":"application/json"}}).then(res=>res.json()).then(json=>console.log(json));
          
          fetch(HOST+"/postParameters",{method:"post",body:params}).then(res=>res.json()).then(json=>console.log(json));
}

