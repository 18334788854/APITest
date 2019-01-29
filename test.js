let str="";
let str1 = "";
for(let i =0;i<=255;i++){
          str+=String.fromCharCode(i)
          str1+=String.fromCodePoint(i);
}
console.log(str,str1);