let good = document.createElement("h4")
let put = document.createTextNode(`"NO MATCH PREFIX"`)
good.appendChild(put)


document.querySelector("#just").addEventListener("click", () => {
    let one = document.querySelector("#one")
    let two = document.querySelector("#two")
    let three = document.querySelector("#three")

    localStorage.setItem("one", one.value)
    localStorage.setItem("two", two.value)
    localStorage.setItem("three", three.value)
   


var a = localStorage.getItem("one");
var b = localStorage.getItem("two");
var c = localStorage.getItem("three");


var LCP = function (str)  {
    // if (str.length === 0) {
    //     return " "
    // }
    // if (str.length === 1) {
    //     return document.write(a)
    // }


     prefix = " "
     // 👇 for 1st word
    for (let i = 0; i < a.length; i++) {

        // 👇 for other words letter
        for (j = 1; j < str.length; j++) {
            if (str[j][i] === str[0][i]) {  //str[0] = 1st word(a)
                continue        //  ☝️ [i] is letter
            }
           else{ return  document.querySelector(".out").appendChild(good) }

        }
        prefix += str[0][i]
        var pre = document.createElement("h2")
        var fix = document.createTextNode(`Common Prefix is "${prefix}"`)
        pre.appendChild(fix)
    }
    return document.querySelector(".out").appendChild(pre)
};

LCP ([a,b,c])
})