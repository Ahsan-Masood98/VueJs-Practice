const mutations = {
    increment(state) {
        state.counter = state.counter + 1;
    },
    increase(state, payload) {
        state.counter = state.counter + payload.value;
    },
}

export default mutations;