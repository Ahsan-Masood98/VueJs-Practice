import { createApp } from 'vue';
import { createStore } from "vuex"
import App from './App.vue';

const counterModule = {
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
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
    },
    getters: {
        getCounter(state){
            return state.counter;
        },
        doubleCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const doubleCounter = getters.doubleCounter;
            if (doubleCounter > 100) {
                return 100;
            }
            if (doubleCounter < 0) {
                return 0;
            }
            return doubleCounter;
        },
    }
}

const store = createStore({
    modules: {
        counetr: counterModule,
    },
    state() {
        return {
            isAuth: false,
        };
    },
    mutations: {
        login(state){
            state.isAuth = true;
        },
        logout(state){
            state.isAuth = false;
        }
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        },
    },
    getters: {
        getIsAuth(state){
            return state.isAuth;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
