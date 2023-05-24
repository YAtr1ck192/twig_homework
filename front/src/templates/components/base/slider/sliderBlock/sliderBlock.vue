<template>
    <div class="slider" id="reviews">
        <div
            v-if="screenWidth > 1320"
            class="slider-track"
        >
            <sliderWrapper :slides="slides"/>
        </div>
        <div
            v-if="screenWidth < 1320"
            class="slider-on-media"
        >
            <slideCard
                v-for="(slide, index) in slides"
                :key="index"
                :slide="slide"
                class="slide"
            />
        </div>
    </div>
</template>

<script>
import sliderWrapper from "@src/templates/components/base/slider/sliderWrapper/sliderWrapper.vue";
import slideCard from "@src/templates/components/base/slider/sliderCard/sliderCard.vue";


export default {
    name: "sliderBlock",
    data () {
        return {
            slides: [
                {
                    img: '/img/slide-img-1.png',
                    desc: 'Коврики супер!!! Качество на высшем уровне!!!' +
                        'Удачи и побольше заказов вам!!! Большое спасибо!',
                    userName: 'Константин В.'
                },
                {
                    img: '/img/slide-img-2.png',
                    desc: 'Покупала у ребят коврики для Хундай солярис в' +
                        ' подарок молодому человеку. Все очень' +
                        ' понравилось. Буду советовать только вас.',
                    userName: 'Вера К.'
                },
                {
                    img: '/img/slide-img-3.png',
                    desc: 'Спасибо, все приехало, поставил. Результатом ' +
                        'доволен, в машине супер! Заказывал на Ниссан.',
                    userName: 'Николай П.'
                },
            ]
        }
    },
    components: {
        sliderWrapper,
        slideCard
    },
    computed: {
        screenWidth () {
            return window.screen.width;
        }
    }
}
</script>

<style lang="scss">

</style>
