import ChimeeMobilePlayer from 'chimee-mobile-player';
import bowser from 'bowser';
import 'chimee-mobile-player/lib/chimee-mobile-player.browser.css';

const video = document.getElementsByClassName('video');
for(let element of video ){
  new ChimeeMobilePlayer({
    wrapper: element,
    src: 'http://cdn.toxicjohann.com/lostStar.mp4',
    controls: true,
    autoplay: false,
    playsInline: true,
    poster: 'http://img3.imgtn.bdimg.com/it/u=1178439972,3652791397&fm=27&gp=0.jpg',
  });
};

const browser = bowser.getParser(window.navigator.userAgent);
impression.userTechData = browser.parse();
console.log(impression.userTechData);
