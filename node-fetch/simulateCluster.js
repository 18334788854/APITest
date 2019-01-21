const cluster = require("cluster");
const child_process = require("child_process");

// const p = child_process.fork("http.js");
// console.log(p.pid);
// p.on("eixt",(code)=>{
//           console.log(`exit : #{code}`);
// });
let p1;
let p2;

if(cluster.isMaster){
          for(let i=0;i<2;i++){
                    
                    cluster.fork();
          }
          // for(let id in cluster.workers){
          //           console.log(id);
          // }       
          cluster.on("exit",function(){

          });
}else{
          
          if(cluster.worker.id===1){
                    p1=cluster.worker.process.fork("http.js");
                    console.log(p1.pid);
          }else if(cluster.worker.id===2){
                    p2=cluster.worker.process.fork("app.js");
                    console.log(p2.pid);
        }  
}