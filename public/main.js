import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router/dist/vue-router.min.js';

// Components
import home from './components/home.vue'
import page from './components/page.vue'

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
        	path: '/',
        	component: home
        },
        {
        	path: '/page', 
        	name: 'Page',
        	component: page}
    ],
    mode: 'history'
})

// Main instance
let vm = new Vue({
	el: '#app',
	router,
	components: {home, page}
})