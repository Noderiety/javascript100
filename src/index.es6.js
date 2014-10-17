// var arr = [1,2,3,4].map(value => value*2);

// process.nextTick( ()=> console.log('hello'));

// var a = 'asdf';
// var {a} = {a: 'asdf'};
var fn = ({a, b}) => {
  // if (!options.a) options.a = true
  console.log(a, b);
}

fn({
  // a: 'hello',
  b: 'world'
})

// console.log(arr);




// /*jshint esnext: true*/
// let that = this;
// var obj = {
//   a: a => b => c => {
//     // let foo = 'asf';
//     console.log(a,b,c)
//   }
// };

// obj.a(1)(2)(3);
// // (a => b => console.log(a, b, this === that))(1)(2);
// // console.log(e => { console.log(e.name); });

// export function a() {}


// (function({a, b=3}) {
//   console.log(a, b);
// })({
//   a: 1
// })