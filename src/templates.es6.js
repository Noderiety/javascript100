let name = 'world';
let greeting = `hello ${(() => name + name)()}`;
console.log(greeting)
