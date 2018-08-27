import ChimeeMobilePlayer from 'chimee-mobile-player';
import 'chimee-mobile-player/lib/chimee-mobile-player.browser.css';

const video = document.getElementsByClassName('video')[0];
const header = document.querySelector('header');
header.addEventListener('click', () => {
  const player = new ChimeeMobilePlayer({
    wrapper: '.video',
    src: 'http://cdn.toxicjohann.com/lostStar.mp4',
    box: 'native',
    controls: true,
    autoplay: false,
    playsInline: true,
    poster: 'http://img3.imgtn.bdimg.com/it/u=1178439972,3652791397&fm=27&gp=0.jpg',
    preload: 'auto',
  });
  player.play();
  console.log(document.querySelector('video'));
});
