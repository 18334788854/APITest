module.exports=function queryParser(str){
          /**
           * a=1&b=2 => {a:1,b:2}
           */
          let obj={};
          let strArray = str.split("&");
          for(let i=0;i<strArray.length;i++){
                    let substrArray = strArray[i].split("=");
                    obj[substrArray[0]]=substrArray[1];
          }
          return obj;
}