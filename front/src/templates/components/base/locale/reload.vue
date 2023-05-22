<template>
    <main></main>
</template>
<script>
    export default {
        created() {
            this.$router.push(this.$route.query.path)
        }
    }
</script>
