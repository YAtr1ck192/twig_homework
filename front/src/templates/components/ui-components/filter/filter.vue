<!--<template>-->
<!--    <div class="t-filter">-->
<!--        <div class="t-filter__container">-->
<!--            <div-->
<!--                v-for="(category, i) in filter"-->
<!--                :key="'filter__category' + i"-->
<!--                :class="{_open: categories[i]}"-->
<!--                class="t-filter__category">-->
<!--                <div class="t-filter__category-title t-dfc" @click="openCategory(i)">-->
<!--                    <div class="t-filter__category-title-text">-->
<!--                        {{category.name}}-->
<!--                    </div>-->
<!--                    <svg class="t-filter__arrow" width="10" height="8" viewBox="0 0 10 8" fill="none"-->
<!--                         xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path d="M10 1.5L5.37143 6.5L0.999999 1.5" stroke="#636363" stroke-width="1.6"/>-->
<!--                    </svg>-->
<!--                </div>-->
<!--                <transition name="fadeHeight">-->
<!--                    <div v-if="categories[i]" class="t-filter-list" :class="{_scroll: category.list.length > 8}">-->
<!--                        <div class="t-filter-list__container">-->
<!--                            <div class="t-filter-list__item" v-for="(listItem, j) in category.list"-->
<!--                                 :key="'filter' + i + '-list-' + j">-->
<!--                                <template v-if="j === 0">-->
<!--                                    <input type="checkbox"-->
<!--                                           class="t-filter-list__input t-dfc _all"-->
<!--                                           :class="{_checked: checkedAll.indexOf(category.id) > -1}"-->
<!--                                           :id="'t-filter_' + i + '_checkbox0' + 0"-->
<!--                                           @change="changeAllFilter(i, 't-filter_' + i + '_checkbox0' + 0)">-->
<!--                                    <label class="t-filter-list__label t-dfc" :for="'t-filter_' + i + '_checkbox0' + 0">-->
<!--                                        <svg class="t-filter-list__ok" width="12" height="8" viewBox="0 0 12 8"-->
<!--                                             fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                            <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                                  d="M10.9747 0L12 0.777923L4.68355 7.8035C4.55338 7.92849 4.36681 8 4.17089 8C3.97496 8 3.78839 7.92849 3.65823 7.8035L0 4.29071L1.02532 3.51279L4.17089 6.53329L10.9747 0Z"-->
<!--                                                  fill="#00A0FF"/>-->
<!--                                        </svg>-->
<!--                                        {{ listItem.name }}-->
<!--                                    </label>-->
<!--                                </template>-->
<!--                                <template v-else>-->
<!--                                    <input type="checkbox"-->
<!--                                           class="t-filter-list__input t-dfc"-->
<!--                                           :id="'t-filter_' + (i + 1) + '_checkbox' + listItem.id"-->
<!--                                           :value="listItem.id"-->
<!--                                           v-model="checked[i]">-->
<!--                                    <label class="t-filter-list__label t-dfc"-->
<!--                                           :for="'t-filter_' + (i + 1) + '_checkbox' + listItem.id">-->
<!--                                        <svg class="t-filter-list__ok" width="12" height="8" viewBox="0 0 12 8"-->
<!--                                             fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                            <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                                  d="M10.9747 0L12 0.777923L4.68355 7.8035C4.55338 7.92849 4.36681 8 4.17089 8C3.97496 8 3.78839 7.92849 3.65823 7.8035L0 4.29071L1.02532 3.51279L4.17089 6.53329L10.9747 0Z"-->
<!--                                                  fill="#00A0FF"/>-->
<!--                                        </svg>-->
<!--                                        {{ listItem.name }}-->
<!--                                    </label>-->
<!--                                </template>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </transition>-->
<!--            </div>-->

<!--            <div v-if="mobileState" @click="pushFilter()" class="t-filter__btn t-btn">Применить</div>-->
<!--        </div>-->

<!--        <div class="t-filter__reset">-->
<!--            <div class="t-filter__reset-text" @click="resetFilter()">Сбросить фильтры</div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    import { mapState } from "vuex";-->

<!--    export default {-->
<!--        props: {-->
<!--            filter: Array,-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                checked: [],-->
<!--                checkedAll: [],-->
<!--                categories: [],-->
<!--                mount: false,-->
<!--                query: {}-->
<!--            };-->
<!--        },-->
<!--        computed: {-->
<!--            ...mapState(['mobileState', 'tabletState']),-->
<!--        },-->
<!--        watch: {-->
<!--            checked: {-->
<!--                handler(newValue) {-->
<!--                    if (!this.mount) {-->
<!--                        return;-->
<!--                    }-->

<!--                    newValue.forEach((item, i) => {-->
<!--                        this.query[this.filter[i].id] = item.length ? item.join() : undefined;-->

<!--                        if (item.length && document.getElementById('t-filter_' + i + '_checkbox0' + 0)) {-->
<!--                            document.getElementById('t-filter_' + i + '_checkbox0' + 0).classList.remove('_checked');-->
<!--                        } else if (document.getElementById('t-filter_' + i + '_checkbox0' + 0)) {-->
<!--                            document.getElementById('t-filter_' + i + '_checkbox0' + 0).classList.add('_checked');-->
<!--                        }-->
<!--                        this.checkedAll[i] = item.length ? '' : this.filter[i].id;-->

<!--                    });-->

<!--                    // на мобилке есть кнопка примерить-->
<!--                    if (!this.mobileState) {-->
<!--                        // если кликнули по табу, то не нужно изменять путь-->
<!--                        if (!this.$parent.isClickTad) {-->
<!--                            this.pushFilter();-->
<!--                        }-->
<!--                        this.$parent.isClickTad = false;-->
<!--                    }-->
<!--                },-->
<!--                deep: true,-->
<!--            },-->
<!--        },-->
<!--        methods: {-->
<!--            pushFilter() {-->
<!--                this.$router.push({-->
<!--                    name: this.$route.name,-->
<!--                    query: Object.assign(-->
<!--                        {},-->
<!--                        this.$route.query,-->
<!--                        {-->
<!--                            loadMore: undefined,-->
<!--                            currentPage: undefined,-->
<!--                        },-->
<!--                        this.query-->
<!--                    ),-->
<!--                }).catch((err) => {-->
<!--                });-->
<!--            },-->
<!--            changeAllFilter(i, classItem) {-->
<!--                if (!document.getElementById(classItem).classList.contains('_checked')) {-->
<!--                    document.getElementById(classItem).classList.add('_checked');-->
<!--                    this.resetFilter(i);-->
<!--                }-->
<!--            },-->
<!--            resetFilter(i, j) {-->
<!--                if (i === undefined) {-->
<!--                    this.checked = [];-->
<!--                    this.filter.forEach((item) => {-->
<!--                        this.checked.push([]);-->
<!--                    });-->
<!--                } else {-->
<!--                    this.checked.splice(i, 1, []);-->
<!--                    if (j)-->
<!--                        this.checked.splice(j, 1, []);-->
<!--                }-->
<!--            },-->

<!--            openCategory(i) {-->
<!--                this.categories.splice(i, 1, !this.categories[i]);-->
<!--            },-->
<!--        },-->
<!--        created() {-->
<!--            this.filter.forEach((item) => {-->
<!--                this.checked.push(this.$route.query[item.id] ? this.$route.query[item.id].split(',') : []);-->
<!--                this.checkedAll.push(this.$route.query[item.id] ? '' : item.id);-->
<!--                this.categories.push(!!this.$route.query[item.id]);-->
<!--            });-->

<!--        },-->
<!--        mounted() {-->
<!--            this.mount = true;-->
<!--        },-->
<!--    };-->
<!--</script>-->

<!--<style lang="sass">-->

<!--</style>-->