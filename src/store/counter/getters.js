const getters = {
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
};

export default getters;