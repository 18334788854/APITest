async function timeout(){
          return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                              reject(new Error("sdfsfdsf"));
                    },2000);
          })
}

async function test(){
          let count = 0;
          do{
                    try{
                              const obj = await timeout();
                              if(obj.a){
                                        break;
                              }
                              // console.log(`${count} 1`);
                              count++;
                    }catch(e){
                              count++;
                              // console.log(`${count} 2`);
                              await timeout();
                    }
          }while(count<=3);
}

test();
