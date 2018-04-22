// 简单测试
{
  a = 2;
  let a;
  console.log(2);
  // 结果：2
}

// 简单测试2
{
  console.log(a);
  let a;
}

// 当函数可以访问并记住所在的词法作用域时，就产生了闭包，即使函数是在当前
// 词法作用域之外执行

function foo() {
  var a = 2;
  function bar() {
    console.log(a); // 2
  }
  bar();
}

foo();
