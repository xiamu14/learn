import Vue from 'vue';
// import ajax from '@fdaciuk/ajax';
import { getEnv } from '../../assets/js/util';

require('../../assets/css/normalize.css');
require('../../assets/css/base.css');

// -------- 两者分离是方便单独配置 --------
// 本地环境使用 mock 模拟数据
if (getEnv() === 'local') {
  if (window.eruda) {
    window.eruda.init();
  }
}

// 线上测试环境使用 eruda
if (getEnv() === 'development') {
  if (window.eruda) {
    window.eruda.init();
  }
}
// --------------------------------------

/* eslint-disable no-new */

new Vue({
  el: '#app',
  render(createElement) {
    return createElement('h1', 'HELLO VUE');
  },
});

