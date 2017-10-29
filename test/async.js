function res1(time) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(10);
    }, time * 1000);
  })
}

function res2(time, res) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(20 + res);
    }, time * 1000);
  })
}

async function test() {
  const a = await res1(1);
  const b = await res2(3, 10);

  const c = await Promise.all([a, b]);

  console.log(c);
}

test();
