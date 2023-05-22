import routerPageHook from '@utilities/routerPageHook.js';
import Vue from 'vue';

export default {
    name: 'e404',
    data() {
        return {
            template: '<main></main>',
        };
    },
    ...routerPageHook,
    render(createElement) {
        return Vue.compile(this.template).render.call(this, createElement);
    },
};
