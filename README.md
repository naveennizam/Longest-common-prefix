### Longest-common-prefix

var LCP = function (str)  {
    if (str.length === 0) {
         return "  "
     }
     if (str.length === 1) {
       return str[0]
     }


     prefix = " "
     // 👇 for 1st word
    for (let i = 0; i < str.length; i++) {

        // 👇 for other words letter
        for (j = 1; j < str.length; j++) {
            if (str[j][i] === str[0][i]) {  //str[0] = 1st word
                continue        //  ☝️ [i] is letter
            }
           else{ return  prefix }

        }
        prefix += str[0][i]
        }
        return prefix
        };
        
LCP (["flower" , "flow" , "flight"])  //input

 fl  ///output
