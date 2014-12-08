let name = 'world';
let greeting1 = `hello ${name}`;
let greeting2 = `hello ${(() => name + name)()}`;
console.log(greeting1)
console.log(greeting2)
