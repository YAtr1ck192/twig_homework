import Vue from 'vue';
import Vuex from 'vuex';

import curtain from './modules/curtain';
import locale from './modules/locale';
import meta from './modules/meta';
import mobile from './modules/mobile';
import modal from './modules/modal';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {
        /* eslint no-param-reassign: 'off' */
    },
    modules: {
        curtain,
        locale,
        meta,
        modal,
        mobile,
    },
    strict: process.env.NODE_ENV !== 'production',
});
