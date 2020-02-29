console.log('mama mia')
var x = document.getElementById("SpecificElement");
console.log(x)
var y = document.getElementById("NewSpecific");
console.log(y)
var z = document.getElementsByClassName("fontSize30 newStyle");
console.log(z)
var demo = function () {
    x+= 1;
console.log('item '+ x +" something")
}
    //functie care afiseaza un element salvat in variabila
x.addEventListener("click", demo);

var demo1 = function () {
    console.log("Do not do this - will be an error!")
}


var demo2 = function (a, b) {
return a+b;
}
y.addEventListener("click", demo2)