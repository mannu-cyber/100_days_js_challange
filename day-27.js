const checkReapeatedTask = (str, num) => {
       let mainstr = str;
       let num1 = parseInt(num);
     
       let last = " ";
     
       for (let i = 0; i < num1; i++) {
         last += mainstr;
       }
       return last;
     };
     console.log(checkReapeatedTask("abc", 3));
     