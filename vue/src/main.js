import Vue from 'vue';
import App from '../components/app.vue';


new Vue ({
    el: '#app',
    data: {
        message: 'hello Vue'
    },
    components: { App }
})