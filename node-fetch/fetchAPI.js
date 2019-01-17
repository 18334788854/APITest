const fetch = require("node-fetch");
const HOST = "http://127.0.0.1:3000";
fetch(HOST+"/text").then(res=>res.text()).then(body=>console.log(body));
fetch(HOST+"/json").then(res=>res.json()).then(json=>console.log(json));
fetch(HOST+"/postSimpleText",{method:"POST",body:"a=1"}).then(res=>res.json()).then(json=>console.log(json));
fetch(HOST+"/postJSON",{method:"post",body:JSON.stringify({c:3,d:4}),headers:{"Content-Type":"application/json"}}).then(res=>res.json()).then(json=>console.log(json));
