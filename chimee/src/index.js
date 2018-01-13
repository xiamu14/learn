// import ChimeeMobilePlayer from "chimee-mobile-player";

// new ChimeeMobilePlayer({
//   wrapper: '#wrapper',  // video dom容器
//   src: 'http://chimee.org/vod/1.mp4',
//   autoplay: true,
//   controls: true,
//   playsInline: true,
//   preload: true,
//   x5VideoPlayerFullscreen: true,
//   x5VideoOrientation: true,
//   xWebkitAirplay: true,
//   muted: true
// });

import Chimee from 'chimee';
const chimee = new Chimee('#wrapper');
chimee.on('play', () => console.log('play!!'));
chimee.load('http://cdn.toxicjohann.com/lostStar.mp4');
chimee.play(); // play!!
