import Vue from 'vue';

import { router } from '../../routes';

export default {
    namespaced: true,
    state: {
        items: {},
    },
    getters: {
        items(state) {
            return state.items;
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
        addItems(state, data) {
            state.items = data;
        },
    },
    actions: {
        loadItems(store, to) {
            return new Promise((resolve) => {
                const url = 'meta?url=';
                Vue.http
                    .get(url + to.replace(router.history.base, ''))
                    .then((response) => response.json())
                    .then((data) => {
                        store.commit('addItems', data);
                        resolve();
                    });
            });
        },
    },
};
