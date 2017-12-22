const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise A.');
  }, 1000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error B');
    // resolve('promise B');
  }, 1500);
});

const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error c');
    // resolve('promise B');
  }, 1000);
});

// Promise.all([promiseA, promiseB, promiseC]).then((res)=>{
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });
promiseA.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

promiseB.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})

promiseC.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
