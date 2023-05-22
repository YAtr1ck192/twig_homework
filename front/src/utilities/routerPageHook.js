import Vue from 'vue';

import { router } from '@src/routes';

/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

// import { store } from '@src/store/index';

export function beforeRouteEnter(to, from, next) {
    if (window.content) {
        next((vm) => {
            vm.template = window.content;
            window.content = undefined;
        });
    } else {
        const path = to.path.replace(router.history.base, '');
        Vue.http.get(`templates${path}`, { params: to.query }).then(
            (data) => {
                next((vm) => {
                    /* eslint no-param-reassign: "error" */
                    vm.template = data.data;
                });
            },
            () => next('/404'),
        );
    }
}

export function beforeRouteUpdate(to, from, next) {
    const path = to.path.replace(router.history.base, '');
    Vue.http.get(`templates${path}`, { params: to.query }).then(
        (data) => {
            next();
            this.template = data.data;
        },
        () => next('/404'),
    );
}

export default { beforeRouteUpdate, beforeRouteEnter };
