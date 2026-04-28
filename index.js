function greet(name, callbackfunction) {
    console.log("Hello " + name);
    callbackfunction(`Welcome to the world of JavaScript, ${name}!`);
}

greet("vasu", (result) => console.log(result))