export default {
    namespaced: true,
    state: {
        show: true,
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
        Show(state) {
            state.show = false;
        },
        Hide(state) {
            state.show = true;
        },
    },
};
