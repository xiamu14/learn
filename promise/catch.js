const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1s test.');
  }, 1000);
});

// promiseA.then((res) => {
//   throw new Error('handler err');
// }, (err)=>{
//   console.log(`promiseA ${err}`);
// });
promiseA.then((res)=>{
  throw new Error('handler err');
}).catch((err)=>{
  console.log(`promiseA ${err}`);
})

