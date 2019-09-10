// NOTE:实现 url history 变化的监听
const _wr = function(type) {
  const orig = history[type];
  return function() {
    const rv = orig.apply(this, arguments);
    const e = new Event(type);
    // e.arguments = arguments;
    window.dispatchEvent(e);
    return rv;
  };
};

history.pushState = _wr("pushState");
history.replaceState = _wr("replaceState");

const AppDom = document.getElementById("app");
const elementA = document.createElement("div");
elementA.innerHTML = "这是A";

const elementB = document.createElement("div");
elementB.innerHTML = "这是B";

const elementC = document.createElement("div");
elementC.innerHTML = "内容：";

AppDom.append(elementA);
AppDom.append(elementB);
AppDom.append(elementC);

elementA.addEventListener("click", () => {
  history.pushState({}, "路由A", "/a.html");
});

elementB.addEventListener("click", () => {
  history.pushState({}, "路由B", "/b.html");
});

window.addEventListener('popstate', () => {
  const history = window.location.href;
  elementC.innerHTML = `内容：${history}`;
})

window.addEventListener("pushState", () => {
  const history = window.location.href;
  elementC.innerHTML = `内容：${history}`;
});
