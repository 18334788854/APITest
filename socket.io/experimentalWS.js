const SocketIO = require("socket.io-client");
const socket = SocketIO.connect("http://127.0.0.1:3000/",{forceNew:false});
socket.on("connection",function(){
          console.log(`socket.io-client connnect successful!`);
});
// console.log(socket);


