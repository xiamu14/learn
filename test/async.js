// function res1(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(10);
//     }, time * 1000);
//   })
// }

// function res2(time, res) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(20 + res);
//     }, time * 1000);
//   })
// }

// async function test() {
//   const a = await res1(1);
//   const b = await res2(3, 10);

//   const c = await Promise.all([a, b]);

//   console.log(c);
// }

// test();

// base
// capture err

const startTime = new Date();

const f = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(123);
      reject('模拟异常');
    }, 2000);
  })
}

const asyncFn = async () => {
  try { // 捕获异常
    const res = await f();
    console.log(res);
  } catch(err) {
    console.log(err); // 处理异常
  }
  const endTime = new Date();
  console.log('用时:', endTime - startTime);
}

asyncFn();

// practise
const getList = () => {
  return Promise((resolve, reject) => {
    ajax({
      url: '/list',
      type: 'GET',
      success: (data) => {
        appendToDom(data);
        resove(data);
      },
      error: (err) => {
        reject(err);
      }
    })
  })
}

const postUpdate = () => {
  return new Promise((resolve, reject) => {
    ajax({
      url: '/update',
      type: 'POST',
      success: (data) => {
        util.toast('success!');
        resolve(data);
      },
      error: (err) => {
        reject(err);
      }
    })
  })
}

const asyncTest = async () => {
  const data1 = await getList();
  const data2 = await postUpdate();
}

asyncTest();
