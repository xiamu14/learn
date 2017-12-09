function loadWebAssembly(path) {
  return fetch(path)                   // 加载文件
    .then(res => res.arrayBuffer())    // 转成 ArrayBuffer
    .then(WebAssembly.instantiate)     // 编译 + 实例化
    .then(mod => mod.instance)         // 提取生成都模块
}

loadWebAssembly('./assemblyscipt.module.wasm')
  .then(instance => {
    const { fib } = instance.exports
    console.log(fib(14));
  })
