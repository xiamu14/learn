const R = require('ramda');

var greet = R.replace('{name}', R.__, 'Hello, {name}!');
//- console.log(greet('Alice')); //=> 'Hello, Alice!

//- console.log(R.add(10)(12));

// 验证函数式无副作用
const sourceArr = ['a', 'b', 'c', 'd'];
const result = R.adjust(R.toUpper, 1, sourceArr);
//-  console.log(result, sourceArr);

const equals4 = R.equals(4);
//- console.log(R.all(equals4)([3, 3, 3, 3])); //=> true

const obj = {i: 1};
const t = R.always(obj);
t().i = 4;
//- console.log(t(), obj); //=> 'Tee'
