import E404 from '@pages/404/index';
import Index from '@pages/index';
import Vue from 'vue';
import VueRouter from 'vue-router';

// import Reload from '@components/base/locale/reload.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: Index,
    },
    // {
    //     path: '/reload',
    //     name: 'reload',
    //     component: Reload,
    // },
    {
        path: '/404',
        name: '404',
        component: E404,
    },
    {
        path: '*',
        component: E404,
    },
];

export const router = new VueRouter({
    routes,
    mode: 'history',
    // наверх страницы будем прокручивать после перехода на страницу (router.afterEach), а не тут, потому что
    // scrollBehavior срабатывает только после анимации и получается скролл наверх уже после анимации перехода на страницу
    // здесь осталось только прокрутка, если нажали на кнопку назад в браузере
    scrollBehavior(to, from, savedPosition) {
        let position = { x: 0, y: 0 };

        if (savedPosition) {
            position = savedPosition;
        }

        return new Promise((resolve) => {
            if (to.name === from.name) {
                resolve();
            } else {
                // меньше 1000 не ставить (иначе не прокрутится),
                // анимация скролла наверх срабатывает через 800 (в router.afterEach)
                setTimeout(() => {
                    resolve(position);
                }, 1000);
            }
        });
    },
});
