var color = "red";

var myDiv = document.getElementById('myDiv');
myDiv.style.background = "black";
myDiv.style.color = "#ffffff";


var myVar;
console.log(typeof myVar === "undefined");
console.log(myVar === undefined);
// undefined can be overridden

var x = null;

if(x == null){
  console.log("If");
} else {
  console.log("Else");
}

// == considers null and undefined the same thing
// === is more strict and will call
  // back false because they are not the exact same

// Scope

var world = "World!";

function sayHello () {
  var hello = "Hello";

  function inner () {
    var extra = " There is more!"
    console.log(hello + world + extra);
  }
  inner()
}

sayHello();

console.log("world outside sayHello(): ", world);

console.log("hello outside sayHello(): ", hello);
// you will get an error because hello can only be used
  //in side the function it is not a global variable like
  //world is
