(({a, b}) => {
  // if (!options.a) options.a = true
  console.log(a, b);
  throw new Error('test?')
})({
  // a: 'hello',
  b: 'world'
})
