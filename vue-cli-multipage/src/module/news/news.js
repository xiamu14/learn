import Vue from 'vue'
import NewsMain from './main.vue'

require('../../assets/css/normalize.css')
require('../../assets/css/base.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<NewsMain/>',
  components: { NewsMain }
})
