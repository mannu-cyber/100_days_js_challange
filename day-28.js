const trunecatestring = (str, num) => {
 if(num <= 0){
       return str
 }
 else{
     return  str.slice(0, num).concat(   ` ...`)
 }

};
console.log(trunecatestring("This is paragraph", 2));
