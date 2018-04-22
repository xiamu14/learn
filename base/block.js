function process(data) {
  console.log(data)
}
{
  let data = [];
  for (let i = 0; i < 10000; i++) {
    data.push(i);
  }
  process(data);
}
function test() {
  console.log('这是一个测试');
  try {
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

test()
