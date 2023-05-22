<template>
    <div class="t-tags t-container">
        <transition name="fade">
            <div v-if="scrollTags > 0" class="t-tags__arrow _left" @click="scrollToLeft">
                <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5.81304 5.49489L0.902746 0L0 1.01022L4.45892 6L0 10.9898L0.902746 12L5.81304 6.50511C6.06232 6.22615 6.06232 5.77385 5.81304 5.49489Z"
                          fill="#929292"/>
                </svg>
            </div>
        </transition>
        <div class="t-tags__container t-dfc" ref="tags" @scroll="changeScroll">
            <div
                v-for="(item, index) in tags" class="t-tags__item"
                :key="'tags-item-' + index"
                :class="{_active: checked[index] === item.id}"
                @click="toggleTags(index, item.id)"
            >
                <span class="t-tags__name">{{ item.name }}</span>
            </div>
        </div>
        <transition name="fade">
            <div v-if="scrollTags < max" class="t-tags__arrow" @click="scrollToRight">
                <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5.81304 5.49489L0.902746 0L0 1.01022L4.45892 6L0 10.9898L0.902746 12L5.81304 6.50511C6.06232 6.22615 6.06232 5.77385 5.81304 5.49489Z"
                          fill="#929292"/>
                </svg>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['tags'],
        data() {
            return {
                checked: [],
                idTags: 'tags',
                scrollTags: 0,
                max: 0,
                deleteLoadMore: {
                    loadMore: undefined,
                    currentPage: undefined
                }
            }
        },
        methods: {
            toggleTags(index, id) {
                this.checked[index] = (this.checked[index] === id) ? undefined : id;
                this.routerPush();
            },
            routerPush() {
                let query = {};
                query = {
                    tags: this.checked.filter((item) => {
                        return item !== undefined
                    }).join(',')
                };
                if (!query.tags) {
                    query = { tags: undefined };
                }
                this.$router.push({
                    name: this.$route.name,
                    query: Object.assign(
                        {},
                        this.$route.query,
                        query,
                        this.deleteLoadMore
                    )
                }).catch(err => {
                });

                this.changeScroll();
            },
            changeScroll() {
                this.scrollTags = this.$refs.tags.scrollLeft;
                this.max = this.$refs.tags.scrollWidth - this.$refs.tags.clientWidth;
            },
            scrollToLeft() {
                this.$refs.tags.scrollTo({
                    left: this.$refs.tags.scrollLeft - 160,
                    behavior: "smooth"
                });
            },
            scrollToRight() {
                this.$refs.tags.scrollTo({
                    left: this.$refs.tags.scrollLeft + 160,
                    behavior: "smooth"
                });
            }
        },
        created() {
            this.tags.forEach((item) => {
                if (this.$route.query[this.idTags]) {
                    this.checked.push(this.$route.query[this.idTags].indexOf(item.id) > -1 ? item.id : undefined);
                }
            });
        },
        mounted() {
            this.max = this.$refs.tags.scrollWidth - this.$refs.tags.clientWidth;
            window.addEventListener('resize', this.changeScroll);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.changeScroll);
        }
    }
</script>

<style lang="sass">

</style>