function asynchornous(timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('测试 async/await');
    }, timer);
  });
}

// async/await can be used.
it('works with async/await', async () => {
  expect.assertions(1);
  const data = await asynchornous(1000);
  expect(data).toEqual('测试 async/await');
});
