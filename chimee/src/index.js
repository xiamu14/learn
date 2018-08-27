import Vue from 'vue';
import Video from './video.vue';

new Vue({
  render(h) {
    return h(Video);
  }
}).$mount('#app');
