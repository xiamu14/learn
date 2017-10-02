/* eslint-env browser */
import anime from "animejs";

const animeDiv = document.createElement("div");
const main = document.getElementsByTagName("main")[0];

animeDiv.classList.add("anime");
main.appendChild(animeDiv);

anime({
  targets: "div.anime",
  translateX: [
    { value: 100, duration: 1200 },
    { value: 0, duration: 800 }
  ],
  rotate: "1turn",
  // backgroundColor: "lightseagreen",
  duration: 2000,
  loop: true
});
