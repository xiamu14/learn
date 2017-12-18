const apiService = new Proxy(axios, {
  get(targe, propKey, receiver) {
    return function(...args) {
      return target[propKey](...args)
        .then((res) => {
          const resData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
          return typeof resData.obj === 'string' ? JSON.parse(res.data) : res.data;
        })
        .cache((err) => {
          throw err;
        });
    }
  }
})
