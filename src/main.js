import { createApp } from 'vue';
import { createStore } from "vuex"
import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            isAuth: false,
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
        login(state){
            state.isAuth = true;
        },
        logout(state){
            state.isAuth = false;
        }

    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            context.commit("increase", payload);
        },
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter > 100) {
                return 100;
            }
            if (finalCounter < 0) {
                return 0;
            }
            return finalCounter;
        },
        getIsAuth(state){
            return state.isAuth;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
