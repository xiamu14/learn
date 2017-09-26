import Vue from 'vue';
import axios from 'axios';

import NewsMain from './main';
import { getAPIHost, getQuery, getEnv } from '../../assets/js/util';
import { getMockNews } from '../../assets/js/mock';

require('../../assets/css/normalize.css');
require('../../assets/css/base.css');

const getNewsDetailURL = `${getAPIHost()}/yuedu/api/article?id=${getQuery('id')}`;

// 本地环境使用 mock 模拟数据
if (getEnv() === 'local') {
  getMockNews(getNewsDetailURL);
}

// Vue.filter('formatDate', formatDate)

/* eslint-disable no-new */
new Vue({
  data() {
    return {
      newsDetail: {},
    };
  },
  el: '#app',
  template: '<NewsMain v-bind:newsDetail="newsDetail"/>',
  mounted() {
    axios.get(getNewsDetailURL).then((res) => {
      // console.log(res);
      if (res.data.err === 0) {
        this.newsDetail = res.data.data;
      }
    });
  },
  components: { NewsMain },
});
