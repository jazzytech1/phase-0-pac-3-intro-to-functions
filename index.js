// Follow along with the examples here
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  
  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  

  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");

  function add(x, y) {
    return x + y;  
  }
console.log(add( 1, 2));

function say(greeting, firstName) {
    console.log ("Amazing!", "JazzyTech");
    return `{greeting!}, {firstName}`;
}
