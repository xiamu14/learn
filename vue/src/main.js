import Vue from 'vue';
// import App from '../components/app.vue';

// var Child = {
//     template: '<div>A child component!</div>'
// };

// new Vue ({
//     el: '#app',
//     components: {
//         'my-component': Child
//     }
// })
//
// 注册
// Vue.component('app', {
//   template: '<div>A custom component!</div>'
// })

// var Child = {
//     props: ['myMessage'],
//     template: '<div>A component! <span>{{myMessage}}</span></div>'
// }
// // 创建根实例
// new Vue({
//   el: '#app',
//   components: {
//     'app': Child
//   }
// })
//
//
Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function() {
            this.counter += 1;
            this.$emit('increment')
        }
    },
})

new Vue ({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total +=1
        }
    }
})