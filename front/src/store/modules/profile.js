import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        profile: {},
        isAuth: false,
    },
    getters: {
        profile(state) {
            return state.profile;
        },
        isAuth(state) {
            return state.isAuth;
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
        setProfile(state, data) {
            state.profile = data;
        },
        logIn(state) {
            state.isAuth = true;
        },
        logOut(state) {
            state.profile = {};
            state.isAuth = false;
        },
    },
    actions: {
        // data имеет поле data - отправляемые данные, url - url запроса
        registrationProfile(data) {
            const url =
                process.env.NODE_ENV !== 'production'
                    ? 'profile/logIn.json'
                    : data.url;
            const method =
                process.env.NODE_ENV !== 'production' ? 'get' : 'post';

            return new Promise((resolve, reject) => {
                Vue.http[method](url, data.data)
                    .then((response) => response.json())
                    .then((response) => {
                        if (response.success) {
                            resolve();
                        } else {
                            reject(response);
                        }
                    })
                    .catch((response) => {
                        reject(response);
                    });
            });
        },
        // data имеет поле data - отправляемые данные, url - url запроса
        loadProfile({ commit }, data) {
            const url =
                process.env.NODE_ENV !== 'production'
                    ? 'profile/logIn.json'
                    : data.url;
            const method =
                process.env.NODE_ENV !== 'production' ? 'get' : 'post';

            return new Promise((resolve, reject) => {
                Vue.http[method](url, data.data)
                    .then((response) => response.json())
                    .then((response) => {
                        if (response.success) {
                            commit('setProfile', response.profile);
                            commit('logIn');

                            resolve();
                        } else {
                            reject(response);
                        }
                    })
                    .catch((response) => {
                        reject(response);
                    });
            });
        },
        logOut({ commit }) {
            const url =
                process.env.NODE_ENV !== 'production'
                    ? 'profile/logOut.json'
                    : 'logOut';

            return new Promise((resolve, reject) => {
                Vue.http
                    .get(url)
                    .then((response) => response.json())
                    .then((response) => {
                        if (response.success) {
                            commit('logOut');

                            resolve();
                        } else {
                            reject(response);
                        }
                    })
                    .catch((response) => {
                        reject(response);
                    });
            });
        },
    },
};
