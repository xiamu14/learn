const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise A.');
  }, 1000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('error B');
    resolve('promise B');
  }, 1500);
});

const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('error c');
    resolve('promise c');
  }, 500);
});

Promise.race([promiseA, promiseB, promiseC]).then((res)=>{
  console.log(res);
}).catch((err) => {
  console.log(err);
});

