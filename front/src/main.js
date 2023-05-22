import onScrollAnimate from '@utilities/scrollAnimate';
import Vue from 'vue';
import VueResource from 'vue-resource';
import { mapMutations, mapState } from 'vuex';

import Curtain from '@components/base/curtain/component';
import Header from '@components/base/header/component';
import Modal from '@components/base/modal/modal.vue';

import { router } from './routes';
import { store } from './store';
import { meta } from './utilities/meta';

// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import vClickOutside from 'v-click-outside';
// import VueCookie from 'vue-cookie';
// import { VueMaskDirective } from 'v-mask';
// import DatePicker from 'vue2-datepicker';
// Vue.directive('mask', VueMaskDirective);
// import { VueMasonryPlugin } from 'vue-masonry';
// import VCalendar from 'v-calendar';
// import MaskedInput from 'vue-masked-input';
// import vSelect from 'vue-select';
// import VueParallaxJs from 'vue-parallax-js';
// import VueLazyload from 'vue-lazyload';
// import clampy from '@clampy-js/vue-clampy';
// import YmapPlugin from 'vue-yandex-maps';

Vue.use(VueResource);

// Vue.use(VueAwesomeSwiper /* { default global options } */);

// Директива v-click-outside собитые при клике вне элемента
// Vue.use(vClickOutside);

// Vue.use(VueCookie);

// Vue.use(DatePicker);

// Vue.use(VueMasonryPlugin);

// Use v-calendar & v-date-picker components
// Vue.use(VCalendar, {
//  componentPrefix: 'v',
// });

// Vue.use(MaskedInput);

// vSelect.props.components.default = () => ({
//     Deselect: {
//         render: (createElement) => createElement('span', ''),
//     },
//     OpenIndicator: {
//         render: (createElement) =>
//             createElement(
//                 'svg',
//                 {
//                     attrs: {
//                         width: '12',
//                         height: '10',
//                         viewBox: '0 0 12 10',
//                         fill: 'none',
//                         xmlns: 'http://www.w3.org/2000/svg',
//                     },
//                 },
//                 [
//                     createElement('path', {
//                         attrs: {
//                             d:
//                                 'M6.86601 9.5C6.48111 10.1667 5.51886 10.1667 5.13396 9.5L0.803833 2C0.418933 1.33333 0.900059 0.5 1.66986 0.5L10.3301 0.5C11.0999 0.5 11.581 1.33333 11.1961 2L6.86601 9.5Z',
//                             fill: '#000000',
//                         },
//                     }),
//                 ],
//             ),
//     },
// });
// Vue.component('v-select', vSelect);

// Vue.use(VueParallaxJs);

/*
// Директива v-lazy для отложенной загрузки изображений
Vue.use(VueLazyload);
 или подключение с опциями
 Vue.use(VueLazyload, {
   preLoad: 1.3,
   error: 'dist/error.png',
   loading: 'dist/loading.gif',
   attempt: 1
 })
*/

// Директива v-clampy="3" обрезает содержимое внутри элемента и добавляет многоточие в конец
// Vue.use(clampy);

// Vue.use(YmapPlugin);

Vue.http.options.root = '/api';

Vue.component('curtain-cmp', Curtain);

Vue.directive('animation', {
    // Когда привязанный элемент вставлен в DOM...
    bind(el, binding) {
        // eslint-disable-next-line
        el.dataset.animate = false;
        if (binding.arg) {
            // eslint-disable-next-line
            el.dataset.animateDirection = binding.arg;
        }
        if (binding.modifiers) {
            Object.keys(binding.modifiers).forEach((item) => {
                // eslint-disable-next-line
                el.dataset[item] = binding.modifiers[item];
            });
        }
    },
});

// Директива v-link вместо элемента router-link
Vue.directive('link', {
    // Когда привязанный элемент вставлен в DOM...
    bind(el) {
        const href = el.getAttribute('href');
        // если ссылка внутренняя, то добавляем базовый язык впереди ссылки
        if (href.charAt(0) === '/') {
            el.setAttribute('href', router.history.base + href);
        }

        el.addEventListener('click', (e) => linkAction(e, el));
    },
    unbind(el) {
        el.removeEventListener('click', (e) => linkAction(e, el));
    },
});

router.beforeEach((to, from, next) => {
    // для страниц с параметром footerHide в routes скрываем футер
    // store.dispatch('UpdateFooterHide', to.matched.some(record => record.meta.footerHide));

    window.removeEventListener('scroll', onScrollAnimate);
    const hideBeforeRouteElements = document.querySelectorAll(
        '.hide-before-route',
    );
    hideBeforeRouteElements.forEach((el) => el.classList.add('hiddenForRoute'));

    // если переходим на страницу, доступную только при регистрации, то редиректим на 403
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     if (!store.getters['profile/isAuth']) {
    //         next({
    //             name: 'E403'
    //         })
    //     } else {
    //         next();
    //     }
    // } else {
    //     next();
    // }

    next();

    // store.dispatch('locale/LoadLocale').then(
    //     () => {
    //         next();
    //     },
    //     (newPath) => {
    //         next(newPath);
    //     }
    // );
});

// eslint-disable-next-line
router.afterEach((to, from) => {
    // topScrollNone используем в routes.js для страниц дочерних например, когда скролл наверх не нужен
    if (
        to.name !== from.name &&
        (!to.matched.some((record) => record.meta.topScrollNone) ||
            !from.matched.some((record) => record.meta.topScrollNone))
    ) {
        // скролл наверх страницы
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'instant',
            });
        }, 750);

        store.dispatch('meta/loadItems', to.path).then(() => {
            meta(store);
        });
    }

    setTimeout(() => {
        onScrollAnimate();
        window.addEventListener('scroll', onScrollAnimate);
    }, 1100);

    setTimeout(() => {
        store.commit('curtain/Show');
        window.content = undefined;
    }, 600);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: {
        'header-cmp': Header,
        'modal-cmp': Modal,
    },
    data() {
        return {
            // staticText: undefined,
            currentYear: undefined,
            loadVue: false,
        };
    },
    computed: {
        ...mapState('mobile', ['isMobile']),
        // pageClass() {
        //     return `t-page_${this.$route.name}`;
        // },
    },
    methods: {
        ...mapMutations('mobile', ['setIsMobile']),
        ...mapMutations('modal', ['Open', 'Close']),

        // setDataAnimateFalse(selector = '') {
        //   document.querySelectorAll(selector + '[data-animate="true"]').forEach((item) => {
        //     item.setAttribute('data-animate', false);
        //     item.setAttribute('data-delay', true);
        //   });
        // },
        // num2str(n, text_forms) {
        //   n = Math.abs(n) % 100;
        //   let n1 = n % 10;
        //   if (n > 10 && n < 20) {
        //     return text_forms[2];
        //   }
        //   if (n1 > 1 && n1 < 5) {
        //     return text_forms[1];
        //   }
        //   if (n1 === 1) {
        //     return text_forms[0];
        //   }
        //   return text_forms[2];
        // },
        // scrollToBlock(selector) {
        //   let elem = document.querySelector(selector);
        //   if (elem) {
        //     let animationOffset = elem.getAttribute('data-animate') === 'false' ? 50 : 0;
        //     let top = elem.getBoundingClientRect().top + window.pageYOffset -
        //       document.querySelector('header').clientHeight - animationOffset;
        //     window.scrollTo({
        //       top: top,
        //       behavior: 'smooth',
        //     });
        //   }
        // },
        // convertTwigToJs(data, classData) {
        //   let dataEvents = document.querySelector(classData).getAttribute('data-' + data);
        //   dataEvents = dataEvents.replace(/'/g, '"');
        //   return JSON.parse(dataEvents);
        // },
        //
        // openModal(data) {
        //   this.disableScroll();
        //   this.Open(data);
        // },
        // closeModal() {
        //   this.enableScroll();
        //   this.Close();
        // },
        // disableScroll() {
        //     const body = document.querySelector('body');
        //     if (body.style.position !== "fixed") {
        //         const heightScroll = window.pageYOffset;
        //
        //         if (this.hasScrollbar()) {
        //             body.style.cssText = `top: ${-heightScroll}px; position: fixed; overflow-y: scroll;`;
        //         } else {
        //             body.style.cssText = `top: ${-heightScroll}px; position: fixed;`;
        //         }
        //     }
        // },
        // enableScroll() {
        //     const body = document.querySelector('body');
        //     const heightTop = body.style.top;
        //
        //     if (heightTop) {
        //         body.style.cssText = "top: auto; position: static; overflow-y: auto;";
        //         window.scrollTo({
        //             top: -parseInt(heightTop, 10),
        //             behavior: "instant"
        //         });
        //     }
        // },
        // // проверка на боковой скролл
        // hasScrollbar() {
        //     return document.body.offsetHeight > window.innerHeight;
        // },
    },
    created() {
        this.setIsMobile();
        window.addEventListener('resize', () => this.setIsMobile());

        this.staticText = window.staticText;

        // расчет текущего года для футера
        this.currentYear = new Date().getFullYear();
    },
    beforeMount() {
        const content = document.getElementById('content');
        window.content = content.innerHTML;
        if (typeof content.remove === 'function') {
            // If support  is found
            content.remove();
        } else {
            // If not
            content.outerHTML = '';
        }
    },
    mounted() {
        this.loadVue = true;
    },
});

// переход по ссылке
function linkAction(e, item) {
    e.preventDefault();
    if (item.getAttribute('to')) {
        router.push(item.getAttribute('to')).catch(() => {});
    } else {
        const path = item.getAttribute('href');
        if (path.charAt(0) === '/') {
            if (router.currentRoute.path !== path) {
                router
                    .push(path.replace(router.history.base, ''))
                    .catch(() => {});
            }
        } else {
            window.open(item.href, '_blank').focus();
        }
    }
}
