import Vue from 'vue';
import axios from 'axios';

import ImageMain from './main';
import { getAPIHost, getQuery, getEnv } from '../../assets/js/util';
import { getMockImage } from '../../assets/js/mock';

require('../../assets/css/normalize.css');
require('../../assets/css/base.css');
require('../../assets/css/swiper.css');

const getImageDetailURL = `${getAPIHost()}/yuedu/api/article?id=${getQuery('id')}`;

// 本地环境使用 mock 模拟数据
if (getEnv() === 'local') {
  getMockImage(getImageDetailURL);
}

/* eslint-disable no-new */
new Vue({
  data() {
    return {
      imageDetail: {},
    };
  },
  el: '#app',
  template: '<ImageMain v-bind:imageDetail="imageDetail"/>',
  mounted() {
    axios.get(getImageDetailURL).then((res) => {
      // console.log(res);
      if (res.data.err === 0) {
        this.imageDetail = res.data.data;
      }
    });
  },
  components: { ImageMain },
});
