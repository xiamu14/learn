import Vue from 'vue';
import axios from 'axios';

import MediaMain from './main';
import { getAPIHost, getQuery, getEnv } from '../../assets/js/util';
import { getMockVideo } from '../../assets/js/mock';

require('../../assets/css/normalize.css');
require('../../assets/css/base.css');
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');

const getVideoDetailURL = `${getAPIHost()}/yuedu/api/video?id=${getQuery('id')}`;

// 本地环境使用 mock 模拟数据
if (getEnv() === 'local') {
  getMockVideo(getVideoDetailURL);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      videoDetail: {},
    };
  },
  template: '<MediaMain v-bind:videoDetail="videoDetail"/>',
  mounted() {
    axios.get(getVideoDetailURL).then((res) => {
      // console.log(res);
      if (res.data.err === 0) {
        this.videoDetail = res.data.data;
      }
    });
  },
  components: { MediaMain },
});
