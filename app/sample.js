import Vue from 'vue';
import other from './other.vue';

const install = () => {
    /* eslint-disable no-new */
    new Vue({
        el: '#app',
        template: '<other />',
        components: { other }
    })
};

setTimeout(() => {
    install();
}, 500);
