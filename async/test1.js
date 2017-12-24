function asynchornous(timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('测试 async/await');
      reject('error test');
    }, timer);
  });
}

async function test() {
  const time0 = new Date();
  let res = '...';
  try {
    res = await asynchornous(2000);
  } catch (error) {
    console.log(`返回 => ${error}`);
  }
  const time1 = new Date();
  console.log(`返回 => ${res},用时：${Math.floor((time1 - time0)/1000)}s`);
}

test();
