import routerPageHook from '@utilities/routerPageHook.js';
import Vue from 'vue';
import { mapState } from 'vuex';

export default {
    name: 'index',
    data() {
        return {
            template: '<main></main>',
        };
    },
    computed: {
        ...mapState('mobile', ['isMobile']),
    },
    components: {},
    ...routerPageHook,
    render(createElement) {
        return Vue.compile(this.template).render.call(this, createElement);
    },
};
