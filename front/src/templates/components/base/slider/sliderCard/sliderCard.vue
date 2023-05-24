<template>
    <div class="slide">
        <img :src="slide.img" alt="slide-img" class="slide-img">
        <div class="slide-content">
            <div class="slide-desc">
                {{ slide.desc }}
            </div>
            <div class="hr"></div>
            <div class="user-name">
                {{ slide.userName }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "slideCard",
    props: ['slide']
}
</script>

<style lang="scss">

</style>
