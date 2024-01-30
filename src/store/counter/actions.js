const actions = {
    increment(context) {
        setTimeout(() => {
            context.commit('increment');
        }, 2000);
    },
    increase(context, payload) {
        context.commit("increase", payload);
    },
};

export default actions;
