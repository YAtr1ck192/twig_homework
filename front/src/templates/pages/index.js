import routerPageHook from '@utilities/routerPageHook.js';
import Vue from 'vue';
import { mapState } from 'vuex';
import sliderBlock from "@components/base/slider/sliderBlock/sliderBlock.vue";
import sliderCard from "@components/base/slider/sliderCard/sliderCard.vue";
import sliderWrapper from "@components/base/slider/sliderWrapper/sliderWrapper.vue";

import {swiperSlide, swiper} from "vue-awesome-swiper/src";


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
    components: {
        sliderBlock,
        sliderWrapper,
        sliderCard,
        swiper,
        swiperSlide
    },
    ...routerPageHook,
    render(createElement) {
        return Vue.compile(this.template).render.call(this, createElement);
    },
};
