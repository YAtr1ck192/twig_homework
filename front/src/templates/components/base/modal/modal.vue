<template>
    <transition name="fade">
        <div v-if="modalComponent" :key="modalComponent" class="t-modal t-dfc" @click="$root.closeModal()">
            <div class="t-modal__content" @click.stop="">
                <div class="t-modal__close" @click="$root.closeModal()"></div>
                <component v-bind:is="modalComponent" :props="modalProps">
                </component>
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    // import CallbackForm from '@components/modals/callbackForm.vue';

    export default {
        data() {
            return {}
        },
        components: {
            // CallbackForm,
        },
        computed: {
            ...mapGetters('modal', ['modalComponent', 'modalProps']),
        },
        methods: {
            ...mapMutations('modal', ['Close']),
        },
        mounted() {

        }
    }
</script>

<style lang="sass">

</style>