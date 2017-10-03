/* eslint-env browser */
import anime from "animejs";

import "./index.less";

const main = document.getElementsByTagName("main")[0];
let i = 0;
while (i < 3) {
  const animeDiv = document.createElement("div");
  animeDiv.classList.add("anime");
  main.appendChild(animeDiv);
  i += 1;
}

// anime({
//   targets: "div.anime",
//   translateX: [
//     { value: 100, duration: 1200 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: "1turn",
//   duration: 2000,
//   loop: true
// });

// translateX
anime({
  targets: "div.anime",
  translateX: 250,
  direction: "alternate",
  loop: true,
  delay: (el, j) => 100 * j
});

