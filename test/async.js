function resolveAfterTwoSecend(x) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(x);
    } , 2000)
  });
}

async function add() {
  const a = await resolveAfterTwoSecend(20);
  const b = await resolveAfterTwoSecend(40);
  return a + b;
}

add().then(v => {
  console.log(v);
});

// test

console.log(async ()=>{});
