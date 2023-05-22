<template>
    <div v-if="isMobile" class="t-locale">
        <select class="t-locale__select" @change="SetLocale($event.target.value)">
            <option
                v-for="item in locale"
                :key="'locale_' + item.value"
                :selected="$router.history.base === item.value || $router.history.base === '/' + item.value"
                :value="item.value"
            >
                {{ item.label }}
            </option>
        </select>
        <svg class="t-locale__svg" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4.76471 6L9 1" stroke="white"/>
        </svg>
    </div>
    <div v-else class="t-locale">
        <div class="t-locale__active" @click.prevent="OpenLinks">
            <span
                class="t-locale__active-text"
                v-for="item in locale"
                v-if="$router.history.base === item.value || $router.history.base === '/' + item.value"
            >
                {{ item.label }}
            </span>
            <svg
                :class="{ _active: open }"
                class="t-locale__svg"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1 1L4.76471 6L9 1" stroke="white"/>
            </svg>
        </div>
        <transition name="fade">
            <div class="t-locale__links" v-if="open" @click.prevent="OpenLinks">
                <div
                    class="t-locale__link"
                    v-for="item in locale"
                    :class="{_active: $router.history.base === item.value || $router.history.base === '/' + item.value}"
                    :key="'locale_' + item.value"
                    @click.prevent="SetLocale(item.value)"
                >
                    {{ item.label }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { mapGetters, mapState } from 'vuex';

    export default {
        data() {
            return {
                open: false
            }
        },
        computed: {
            ...mapGetters('locale', ['locale']),
            ...mapState('mobile', ['isMobile'])
        },
        methods: {
            SetLocale(e) {
                this.open = false;

                Vue.cookie.set('locale', e, { expires: '1Y' });

                if (e === '') {
                    this.$router.history.base = '';
                    Vue.http.options.root = '/api';
                } else {
                    this.$router.history.base = '/' + e;
                    Vue.http.options.root = '/api/' + e;
                }

                // let url = '/api/lang/';
                // Vue.http.get(url)
                //   .then(response => response.json())
                //   .then(data => {
                //     this.$root.staticText = data;
                //   });
                //
                // this.$router.push({ name: 'reload', query: { path: this.$route.fullPath } });

                // перезагрузка страницы
                window.location = window.location.protocol + '//' +
                    window.location.host + this.$router.history.base + this.$route.fullPath;

            },
            OpenLinks() {
                this.open = !this.open;
            }
        },
        mounted() {
            let _this = this;

            document.addEventListener('click', function (e) {
                let menu = document.querySelector('.t-locale');
                if (menu !== null) {
                    let target = e.target;
                    let its_menu = target === menu || menu.contains(target);
                    if (!its_menu && _this.open) {
                        _this.open = false;
                    }
                }
            })
        }
    }
</script>

<style lang="sass">
</style>
