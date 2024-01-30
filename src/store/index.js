import { createStore } from "vuex"
import counterModule from "./counter";

const store = createStore({
    modules: {
        counter: counterModule,
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

export default store;
