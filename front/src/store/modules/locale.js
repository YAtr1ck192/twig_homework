import Vue from 'vue';

import { router } from '../../routes';

/* eslint-disable */
export default {
    namespaced: true,
    state: {
        locale: [],
    },
    getters: {
        locale(state) {
            return state.locale;
        },
    },
    mutations: {
        LoadLocale(state, data) {
            state.locale = data;
        },
    },
    actions: {
        LoadLocale(context) {
            return new Promise((resolve, reject) => {
                let localeJson = locale;
                if (context.state.locale && context.state.locale.length > 0) {
                    resolve();
                } else {
                    context.commit('LoadLocale', localeJson);

                    let base_local = '';

                    let locale_arr = [];
                    if (localeJson) {
                        for (let i = 0; i < localeJson.length; i++) {
                            locale_arr.push(localeJson[i].value);
                        }
                    }

                    let path = [];
                    for (let i = 0; i < router.options.routes.length; i++) {
                        path.push(router.options.routes[i].path);
                    }

                    let locale = Vue.cookie.get('locale');
                    let pathname = window.location.pathname.split('/');

                    if (locale === null) {
                        if (pathname[1] === '') {
                            locale =
                                navigator.systemLanguage ||
                                window.navigator.language ||
                                navigator.userLanguage ||
                                navigator.browserLanguage;

                            if (locale_arr.indexOf(locale) >= 0) {
                                Vue.cookie.set('locale', locale, {
                                    expires: '1Y',
                                });

                                base_local = locale;
                            } else {
                                Vue.cookie.set('locale', '', { expires: '1Y' });
                            }
                        } else {
                            if (locale_arr.indexOf(pathname[1]) >= 0) {
                                Vue.cookie.set('locale', pathname[1], {
                                    expires: '1Y',
                                });

                                base_local = pathname[1];
                            } else {
                                if (path.indexOf('/' + pathname[1]) >= 0) {
                                    Vue.cookie.set('locale', '', {
                                        expires: '1Y',
                                    });
                                } else {
                                    console.log('error');
                                }
                            }
                        }
                    } else {
                        if (locale === pathname[1]) {
                            base_local = locale;
                        } else {
                            if (locale_arr.indexOf(pathname[1]) >= 0) {
                                Vue.cookie.set('locale', pathname[1], {
                                    expires: '1Y',
                                });

                                base_local = pathname[1];
                            } else {
                                if (path.indexOf('/' + pathname[1]) >= 0) {
                                    Vue.cookie.set('locale', '', {
                                        expires: '1Y',
                                    });
                                } else {
                                    console.log('error');
                                }
                            }
                        }
                    }

                    if (base_local === '') {
                        router.history.base = base_local;
                        Vue.http.options.root = '/api';
                        resolve();
                    } else {
                        router.history.base = '/' + base_local;
                        Vue.http.options.root = '/api/' + base_local;

                        let newPath = '';
                        for (let i = 2; i < pathname.length; i++) {
                            newPath += '/' + pathname[i];
                        }
                        reject(newPath);
                    }
                }
            });
        },
    },
};
