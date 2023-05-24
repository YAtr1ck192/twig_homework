<template>
    <div class="container">
        <div class="slider-wrapper">
            <swiper class="swiper" :options="swiperOption">
                <swiperSlide
                    v-for="(slide, index) in slides"
                    :key="index"
                >
                    <slideCard :value="slide" :slide="slide"/>
                </swiperSlide>
            </swiper>
        </div>
    </div>
</template>

<script>
import {swiperSlide, swiper} from "vue-awesome-swiper/src";

import slideCard from "../sliderCard/sliderCard.vue";

export default {
    name: "sliderWrapper",
    props: ['slides'],
    computed: {
        swiperOption() {
            return {
                slidesPerView: 3,
                spaceBetween: 70,
                slidesPerGroup: 1,
                loop: true,
                centeredSlides: true,
            }
        }
    },
    components: {
        swiper,
        swiperSlide,
        slideCard
    },

}
</script>

<style lang="scss">

</style>
