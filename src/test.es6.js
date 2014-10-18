(({a, b}) => {
  console.log(a, b);
  throw new Error('test?')
})({
  a: 'hello',
  b: 'world'
})
