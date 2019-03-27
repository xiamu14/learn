import ChimeePlayer from "chimee-player";

const chimee = new ChimeePlayer({
  wrapper: ".player--box",
  src: "http://livepull.utoooo.com/live/102194.flv",
  controls: true,
  autoplay: false,
  box: "flv",
  isLive: true
});

const menusPlugin = chimee.chimeeContextmenu;
chimee.on("pause", () => {
  menusPlugin.updatemenu([{ text: '暂停', action: 'pause' }]);
});
// chimee.on("stalled", err => {
//   console.log(err);
// });
chimee.chimeeLog.open();
// // 访问播放器菜单插件实例
// chimee.on('play', () => {
//   // 当播放器处于播放状态时，自定义菜单项显示暂停

// }).on('pause', () => {
//   // 当播放器处于状态暂停时，自定义菜单项显示播放
//   menusPlugin.updatemenu([{ text: '播放', action: 'play' }]);
// });
