import Vue from 'vue';
import VueRouter from 'vue-router';
import MainScreen from './view/MainScreen.vue';
import Home from './view/home/Index.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: MainScreen },
        { path: '/home', component: Home },
    ],
});
