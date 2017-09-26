<template>
  <div id="media-wrapper">
    <videoPlayer class="video-player-box vjs-big-play-centered" ref="videoPlayer" :options="playerOptions" :playsinline="true">
    </videoPlayer>
    <p class="title">{{detail.title}}</p>
    <div class="info">
      <span class="date"></span>
      <span class="source"></span>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player';

export default {
  props: {
    detail: {
      type: Object,
    },
  },
  data() {
    return {
      playerOptions: {
        muted: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        width: '100%',
        height: '210',
        sources: [{
          type: 'video/mp4',
          src: this.detail.video_url,
        }],
        poster: this.detail.video_img,
      },
    };
  },
  updated() {
    this.playerOptions.poster = this.detail.video_img;
    this.playerOptions.sources[0].src = this.detail.video_url;
  },
  components: {
    videoPlayer,
  },
};
</script>

<style lang="less">
@rem : 37.5rem;
#media-wrapper .video-js {
  width: 100%;
  .vjs-big-play-button {
    top: 50%;
    left: 50%;
    height: 1.5em;
    width: 1.5em;
    margin-top: -0.75em;
    margin-left: -0.75em;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0);
  }
  .video-js:hover .vjs-big-play-button,
  .vjs-custom-skin>.video-js .vjs-big-play-button:focus,
  .vjs-custom-skin>.video-js .vjs-big-play-button:active {
    background-color: rgba(255, 255, 255, 0);
  }
}

#media-wrapper {
  .title {
    margin: 10/@rem 14/@rem 5/@rem;
    font-size: 20px;
    color: #232527;
    letter-spacing: 0;
  }
  .info {
    margin: 0 14/@rem;
    font-size: 12px;
    color: #969FA5;
    line-height: 12px;
  }
}
</style>
