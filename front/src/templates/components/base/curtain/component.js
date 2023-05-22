import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('curtain', ['show']),
    },
};
