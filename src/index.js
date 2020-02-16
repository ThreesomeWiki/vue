import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';

const eventBus = {
    install() {
        Vue.prototype.$bus = new Vue();
    },
};
Vue.use(eventBus);

Vue.use(Vuex);
const store = new Vuex.Store({
    state: { count: 1 },
    mutations: {
        addCount(state) {
            state.count++;
        },
    },
    actions: {
        addCount({ commit }, { data }) {
            console.log(data);
            setTimeout(() => {
                commit('addCount');
            }, 1);
        },
    },
});
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
});
