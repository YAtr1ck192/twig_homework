<!--<template>-->
<!--    <div v-if="pagination.pageCount > 1" class="t-pagination">-->
<!--        &lt;!&ndash;        <router-link&ndash;&gt;-->
<!--        &lt;!&ndash;            class="t-pagination__first"&ndash;&gt;-->
<!--        &lt;!&ndash;            v-if="fl && (pagination.currentPage > max/2 + 1)"&ndash;&gt;-->
<!--        &lt;!&ndash;            :to="{&ndash;&gt;-->
<!--        &lt;!&ndash;                path: $route.path,&ndash;&gt;-->
<!--        &lt;!&ndash;                query: Object.assign(&ndash;&gt;-->
<!--        &lt;!&ndash;                    {},&ndash;&gt;-->
<!--        &lt;!&ndash;                    $route.query,&ndash;&gt;-->
<!--        &lt;!&ndash;                    deleteLoadMore,&ndash;&gt;-->
<!--        &lt;!&ndash;                    {[nameCurrentPage]: 1},&ndash;&gt;-->
<!--        &lt;!&ndash;                    {animation: animation},&ndash;&gt;-->
<!--        &lt;!&ndash;                )&ndash;&gt;-->
<!--        &lt;!&ndash;            }"&ndash;&gt;-->
<!--        &lt;!&ndash;        >&ndash;&gt;-->
<!--        &lt;!&ndash;        &lt;!&ndash; Первая &ndash;&gt;&ndash;&gt;-->
<!--        &lt;!&ndash;        </router-link>&ndash;&gt;-->
<!--        &lt;!&ndash;        <template v-if="pagination.pageCount > max">&ndash;&gt;-->
<!--        <component-->
<!--            :is="prevTag"-->
<!--            class="t-pagination__prev"-->
<!--            :class="{'_disabled': !prevActive}"-->
<!--            :to="{-->
<!--                    path: $route.path,-->
<!--                    query: Object.assign(-->
<!--                        {},-->
<!--                        $route.query,-->
<!--                        deleteLoadMore,-->
<!--                        {[nameCurrentPage]: pagination.currentPage - 1},-->
<!--                        {animation: animation},-->
<!--                    )-->
<!--                }"-->
<!--        >-->
<!--            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                      d="M1.48561 7L7.61523 0.870379L6.74486 0L0.180046 6.56481C-0.0603032 6.80516 -0.0603032 7.19484 0.180046 7.43519L6.74486 14L7.61523 13.1296L1.48561 7Z"-->
<!--                      fill="#C8C8C8"/>-->
<!--            </svg>-->
<!--            &lt;!&ndash; Предыдущая &ndash;&gt;-->
<!--        </component>-->
<!--        &lt;!&ndash;        </template>&ndash;&gt;-->

<!--        <div class="t-pagination-list">-->
<!--            <router-link-->
<!--                class="t-pagination-list__link"-->
<!--                v-if="dots && pagination.pageCount > max + 2 && pagination.currentPage > 3"-->
<!--                :to="{-->
<!--                    path: $route.path,-->
<!--                    query: Object.assign(-->
<!--                        {},-->
<!--                        $route.query,-->
<!--                        deleteLoadMore,-->
<!--                        {[nameCurrentPage]: range[0].i - 1},-->
<!--                        {animation: animation},-->
<!--                    )-->
<!--                }"-->
<!--            >-->
<!--                ...-->
<!--            </router-link>-->
<!--            &lt;!&ndash; цикл &ndash;&gt;-->
<!--            <template v-for="item in range">-->
<!--                <router-link-->
<!--                    class=" t-pagination__item"-->
<!--                    :class="{'t-pagination__item_active': item.i === pagination.currentPage}"-->
<!--                    :to="{-->
<!--                        path: $route.path,-->
<!--                        query: Object.assign(-->
<!--                            {},-->
<!--                            $route.query,-->
<!--                            deleteLoadMore,-->
<!--                            {[nameCurrentPage]: item.i},-->
<!--                            {animation: animation},-->
<!--                        )-->
<!--                    }"-->
<!--                    :key="item.i"-->
<!--                >-->
<!--                    {{ item.i }}-->
<!--                </router-link>-->
<!--            </template>-->
<!--            <router-link-->
<!--                class="t-pagination-list__link"-->
<!--                v-if="dots && pagination.pageCount > max + 2 && pagination.currentPage < pagination.pageCount - 3"-->
<!--                :to="{-->
<!--                    path: $route.path,-->
<!--                    query: Object.assign(-->
<!--                        {},-->
<!--                        $route.query,-->
<!--                        deleteLoadMore,-->
<!--                        {[nameCurrentPage]: range[range.length - 1].i + 1},-->
<!--                        {animation: animation},-->
<!--                    )-->
<!--                }"-->
<!--            >-->
<!--                ...-->
<!--            </router-link>-->
<!--            <router-link-->
<!--                class="t-pagination__item"-->
<!--                :class="{'t-pagination__item_active': pagination.pageCount === pagination.currentPage}"-->
<!--                v-if="dots && pagination.pageCount > max + 2 && (pagination.currentPage < pagination.pageCount - 3)"-->
<!--                :to="{-->
<!--                    path: $route.path,-->
<!--                    query: Object.assign(-->
<!--                        {},-->
<!--                        $route.query,-->
<!--                        deleteLoadMore,-->
<!--                        {[nameCurrentPage]: pagination.pageCount},-->
<!--                        {animation: animation},-->
<!--                    )-->
<!--                }"-->
<!--            >-->
<!--                {{ pagination.pageCount }}-->
<!--            </router-link>-->
<!--        </div>-->

<!--        &lt;!&ndash;        <template v-if="pagination.pageCount > max">&ndash;&gt;-->
<!--        <component-->
<!--            :is="nextTag"-->
<!--            class="t-pagination__next"-->
<!--            :class="{'_disabled': !nextActive}"-->
<!--            :to="{-->
<!--                    path: $route.path,-->
<!--                    query: Object.assign(-->
<!--                        {},-->
<!--                        $route.query,-->
<!--                        deleteLoadMore,-->
<!--                        {[nameCurrentPage]: pagination.currentPage + 1},-->
<!--                        {animation: animation},-->
<!--                    )-->
<!--                }"-->
<!--        >-->
<!--            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                      d="M6.51439 7L0.384766 0.870379L1.25514 0L7.81995 6.56481C8.0603 6.80516 8.0603 7.19484 7.81995 7.43519L1.25514 14L0.384766 13.1296L6.51439 7Z"-->
<!--                      fill="#C8C8C8"/>-->
<!--            </svg>-->
<!--            &lt;!&ndash; Следующая &ndash;&gt;-->
<!--        </component>-->
<!--        &lt;!&ndash;        </template>&ndash;&gt;-->
<!--        &lt;!&ndash;        <router-link&ndash;&gt;-->
<!--        &lt;!&ndash;            class="t-pagination__last"&ndash;&gt;-->
<!--        &lt;!&ndash;            v-if="fl && (pagination.currentPage < pagination.pageCount - max/2)"&ndash;&gt;-->
<!--        &lt;!&ndash;            :to="{&ndash;&gt;-->
<!--        &lt;!&ndash;                path: $route.path,&ndash;&gt;-->
<!--        &lt;!&ndash;                query: Object.assign(&ndash;&gt;-->
<!--        &lt;!&ndash;                    {},&ndash;&gt;-->
<!--        &lt;!&ndash;                    $route.query,&ndash;&gt;-->
<!--        &lt;!&ndash;                    deleteLoadMore,&ndash;&gt;-->
<!--        &lt;!&ndash;                    {[nameCurrentPage]: pagination.pageCount},&ndash;&gt;-->
<!--        &lt;!&ndash;                    {animation: animation},&ndash;&gt;-->
<!--        &lt;!&ndash;                )&ndash;&gt;-->
<!--        &lt;!&ndash;            }"&ndash;&gt;-->
<!--        &lt;!&ndash;        >&ndash;&gt;-->
<!--        &lt;!&ndash;        &lt;!&ndash; Последняя &ndash;&gt;&ndash;&gt;-->
<!--        &lt;!&ndash;        </router-link>&ndash;&gt;-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->

<!--    import { mapState } from "vuex";-->

<!--    export default {-->
<!--        props: {-->
<!--            pagination: Object,-->
<!--            nameCurrentPage: {-->
<!--                type: String,-->
<!--                default: 'currentPage'-->
<!--            },-->
<!--            nameLoadMore: {-->
<!--                type: String,-->
<!--                default: 'loadMore'-->
<!--            },-->
<!--            animation: {-->
<!--                type: String,-->
<!--                default: undefined-->
<!--            }-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                max: 5, // начальное количество страниц-->
<!--                fl: false,-->
<!--                dots: true, // пока сделано для true, с точками-->
<!--                deleteLoadMore: {-->
<!--                    [this.nameCurrentPage]: undefined,-->
<!--                    [this.nameLoadMore]: undefined,-->
<!--                }-->
<!--            }-->
<!--        },-->
<!--        computed: {-->
<!--            ...mapState('mobile', ['isMobile']),-->

<!--            prevActive() {-->
<!--                return this.pagination.currentPage > 1;-->
<!--            },-->
<!--            prevTag() {-->
<!--                if (this.prevActive) {-->
<!--                    return 'router-link';-->
<!--                } else {-->
<!--                    return 'span';-->
<!--                }-->
<!--            },-->
<!--            nextActive() {-->
<!--                return this.pagination.currentPage < this.pagination.pageCount;-->
<!--            },-->
<!--            nextTag() {-->
<!--                if (this.nextActive) {-->
<!--                    return 'router-link';-->
<!--                } else {-->
<!--                    return 'span';-->
<!--                }-->
<!--            },-->
<!--            currentPage() {-->
<!--                return parseInt(this.$route.query[this.nameCurrentPage] || 1);-->
<!--            },-->
<!--            range() {-->
<!--                let current = this.pagination.currentPage;-->
<!--                let array = [];-->

<!--                if (this.pagination.pageCount > this.max + 2) {-->
<!--                    // если до середины 3, то пушим все-->
<!--                    if (current <= 3) {-->
<!--                        for (let i = 0; i < this.max; i++) {-->
<!--                            array.push({ i: i + 1 });-->
<!--                        }-->

<!--                        // если в середине-->
<!--                    } else if (-->
<!--                        (current > 3 && current < this.pagination.pageCount - 3)-->
<!--                    ) {-->
<!--                        for (let i = current - 1; i < current + 2; i++) {-->
<!--                            array.push({ i: i });-->
<!--                        }-->

<!--                        // если в конце-->
<!--                    } else if (current >= this.pagination.pageCount - 3) {-->
<!--                        for (let i = this.pagination.pageCount - this.max + 1; i < this.pagination.pageCount + 1; i++) {-->
<!--                            array.push({ i: i });-->
<!--                        }-->
<!--                    }-->

<!--                } else {-->
<!--                    for (let i = 0; i < this.pagination.pageCount; i++) {-->
<!--                        array.push({ i: i + 1 });-->
<!--                    }-->
<!--                }-->

<!--                return array;-->
<!--            }-->
<!--        },-->
<!--        mounted() {-->
<!--            if (this.isMobile) {-->
<!--                this.max = 4;-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style lang="sass">-->

<!--</style>-->
