<script>
import ChimeeMobilePlayer from "chimee-mobile-player";
import "chimee-mobile-player/lib/chimee-mobile-player.browser.css";

export default {
  methods: {
    init() {
      const player = new ChimeeMobilePlayer({
        wrapper: ".video",
        src: "http://cdn.toxicjohann.com/lostStar.mp4",
        box: "native",
        controls: true,
        autoplay: false,
        playsInline: true,
        poster:
          "http://img3.imgtn.bdimg.com/it/u=1178439972,3652791397&fm=27&gp=0.jpg",
        preload: "auto"
      });
      player.play();
    }
  }
};
</script>

<template>
  <div class="box">
    <header @click="init">测试一下吧</header>
    <div class="video"></div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
container {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
video {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #000;
}
video:focus,
video:active {
  outline: none;
}
header {
  width: 100%;
  height: 40px;
  background: steelblue;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  z-index: 100;
}
.video {
  margin-bottom: 20px;
}
</style>
