let j = {
  x : 3
};

function test(i) {
  console.log(i.x++);
  console.log(i.x);
}
test(j);
console.log(j);
