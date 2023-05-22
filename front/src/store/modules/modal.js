export default {
    namespaced: true,
    state: {
        // modalComponent: [],
        modalComponent: null,
        modalProps: null,
    },
    getters: {
        // getModalComponent(state) {
        //   return state.modalComponent[state.modalComponent.length - 1];
        // },
        modalComponent(state) {
            return state.modalComponent;
        },
        modalProps(state) {
            return state.modalProps;
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
        // openModal(state, newState) {
        //   state.modalComponent.push(newState);
        // },
        // closeModal(state) {
        //   state.modalComponent.splice(state.modalComponent.length - 1, 1);
        // },
        Open(state, data) {
            state.modalComponent = data.newState;
            state.modalProps = data.props;
        },
        Close(state) {
            state.modalComponent = null;
            state.modalProps = null;
        },
    },
};
