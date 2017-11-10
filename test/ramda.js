const R = require('ramda');

// function isString(test) {
//   return R.is(String, test);
// }


const isString = R.is(String);
console.log(isString('ceshi'));

const quadratic = R.curry((a, b, c, x) => x * x * a + x * b + c);
console.log(quadratic(2, 1, 4)(5));

