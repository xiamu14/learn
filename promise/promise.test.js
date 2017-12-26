function sleep(timer, state) {
  return new Promise(((reslove) => {
    setTimeout(() => {
      // things
      reslove('sleep:ok');
      if (state === 404) {
        throw new Error('sleep:这里有个 404');
      }
    }, timer);
  }));
}

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return sleep(1000, 200).then(result => expect(result).toEqual('sleep:ok'));
});
