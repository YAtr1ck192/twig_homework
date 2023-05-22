<template>
    <div
        v-animation:bottom.delay
        v-if="pagination.pageCount > pagination.currentPage"
        class="t-load-more"
    >
        <div
            class="t-btn _border"
            @click="clickLoadMore(pagination.currentPage)"
        >
            Загрузить еще новости
        </div>
    </div>
</template>

<script>
    export default {
        name: "load-more",
        props: {
            pagination: Object
        },
        methods: {
            clickLoadMore(currentPage) {
                this.$router.push({
                    name: this.$route.name, query:
                        Object.assign({}, this.$route.query,
                            { loadMore: true, currentPage: 1 + parseInt(currentPage) })
                }).catch(err => {
                });
            }
        }
    }
</script>

<style lang="sass">

</style>