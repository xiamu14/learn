function sleep(timer, state) {
  return new Promise(((reslove) => {
    setTimeout(() => {
      // things
      console.log('sleep:返回 OK');
      reslove('sleep:ok');
      if (state === 404) {
        throw new Error('sleep:这里有个 404');
      }
    }, timer);
  }));
}

function lazy(timer, state) {
  return new Promise(((reslove) => {
    setTimeout(() => {
      // things
      console.log('lazy:返回 OK');
      reslove('lazy:ok');
      if (state === 404) {
        throw new Error('lazy:这里有个 404');
      }
    }, timer);
  }));
}

async function start() {
  console.log('等待 3秒>>>>');
  const sleepRes = sleep(1000, 403);
  const lazyRes = lazy(1000, 403);
  try {
    const result = await Promise.all([sleepRes, lazyRes]);
    console.log('回馈', result);
  } catch (err) {
    console.log(err);
  }
}

start();
