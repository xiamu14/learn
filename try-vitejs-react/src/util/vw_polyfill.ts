export function vwToDynamicPx() {
  const de = document.documentElement;
  // set 1rem = clientWidth / 100  (1rem = 1vw)
  function setRem() {
    const rem = de.clientWidth / 100;
    de.style.fontSize = rem + "px";
  }
  setRem();
  // reset rem unit on page resize
  window.addEventListener("resize", setRem);
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRem();
    }
  });
}

export function vwPolyfill() {
  try {
    if (!window) {
      return;
    }
    const body = document.body;
    const testEle = document.createElement("div");
    testEle.setAttribute("style", "width: 50vw");
    const halfWidth = Math.ceil(window.innerWidth / 2);
    body.appendChild(testEle);
    // 修复部分浏览器（ios微信webview）宽度无法正常获取的问题
    setTimeout(() => {
      const testWidth = testEle.clientWidth;
      //   console.log(testEle.clientWidth, halfWidth);
      if (testWidth !== halfWidth) {
        vwToDynamicPx();
      }
      body.removeChild(testEle);
    }, 1);
  } catch (error) {
    console.error("VW POLYFILL ERROR:", error);
  }
}
