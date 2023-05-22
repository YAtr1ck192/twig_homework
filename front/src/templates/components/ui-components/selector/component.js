export default {
    data() {
        return {
            selectorVisible: false,
            selectorTitle: '',

            selector: [
                {
                    id: 1,
                    title: 'Задать вопрос',
                },
                {
                    id: 2,
                    title: 'Прислать новость',
                },
            ],
        };
    },
    props: ['items', 'selector-key'],
    methods: {
        toogleSelector() {
            this.selectorVisible = !this.selectorVisible;
        },
        closeSelector() {
            this.selectorVisible = false;
        },
        chooseSelect(id) {
            if (!id) return;

            const select = this.selector.find((item) => item.id === id);
            this.selectorTitle = select.title;

            this.$emit('set-selector', select.id, this.selectorKey);
            this.closeSelector();
        },
    },
    created() {
        // console.log('selector-key', this.selectorKey);
        if (this.items) {
            this.selector = [...this.items];
        }
        this.chooseSelect(1);
    },
};
