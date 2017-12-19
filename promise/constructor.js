const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve("3秒后返回了A");
  }, 1000);
});
promiseA.then((res)=>{
  console.log(res);
});
