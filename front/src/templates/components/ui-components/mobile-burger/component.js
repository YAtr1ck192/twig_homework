import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations('mobile', ['toogleMobileMenu']),
    },
};
