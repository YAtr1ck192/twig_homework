export default {
    computed: {
        facebook() {
            return `https://www.facebook.com/sharer.php?u=${this.$route.fullPath}`;
        },
        vkontakte() {
            return `https://vk.com/share.php?url=${this.$route.fullPath}`;
        },
        twitter() {
            const text = document.head.querySelector('title').innerHTML;
            return `https://twitter.com/intent/tweet?url=${this.$route.fullPath}&text=${text}&via=ТВ2`;
        },
        ok() {
            const text = document.head.querySelector('title').innerHTML;
            return `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${this.$route.fullPath}&title=${text}`;
        },
        telegram() {
            const text = document.head.querySelector('title').innerHTML;
            return `https://t.me/share/url?url=${this.$route.fullPath}&text=${text}`;
        },
        wa() {
            return `whatsapp://send?text=${this.$route.fullPath}`;
        },
    },
};
