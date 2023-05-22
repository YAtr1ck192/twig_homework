export default {
    data() {
        return {
            months: [
                'января',
                'февраля',
                'марта',
                'апреля',
                'мая',
                'июня',
                'июля',
                'августа',
                'сентября',
                'октября',
                'ноября',
                'декабря',
            ],
            day: {
                date: null,
                timeStamp: null,
                placeholder: null,
            },
            isDataPickerVisible: false,
        };
    },
    computed: {
        headerPlaceholder() {
            if (this.day.placeholder) {
                return `${this.day.placeholder}`;
            }
            return 'Сортировать по дате';
        },
        dateModel: {
            get() {
                return this.day.date;
            },
            set(val) {
                this.day = {
                    date: val,
                    timeStamp: new Date(val).getTime(),
                    placeholder: this.getPlaceholder(val),
                };

                this.onDayChoose();
            },
        },
        isShowFilterClear() {
            return !!this.day.date;
        },
    },
    methods: {
        onClearFilter() {
            const query = { ...this.$route.query };

            this.day = {
                date: null,
                timeStamp: null,
                placeholder: null,
            };

            if (!query['filter-date']) return;

            delete query['filter-date'];

            this.$router.push({ name: this.$route.name, query });
        },
        onToogleDataPickerVisible() {
            this.isDataPickerVisible = !this.isDataPickerVisible;
        },
        onCloseDataPicker() {
            this.isDataPickerVisible = false;
        },
        onDayChoose() {
            this.onCloseDataPicker();

            this.$router.push({
                name: this.$route.name,
                query: {
                    ...this.$route.query,
                    'filter-date': this.day.timeStamp,
                },
            });
        },
        getPlaceholder(val) {
            return `${val.getDate()} ${
                this.months[val.getMonth()]
            }, ${val.getFullYear()} год`;
        },
    },

    created() {
        if (Object.keys(this.$route.query).includes('filter-date')) {
            this.day = {
                date: new Date(+this.$route.query['filter-date']),
                timeStamp: this.$route.query['filter-date'],
                placeholder: this.getPlaceholder(
                    new Date(+this.$route.query['filter-date']),
                ),
            };
        }
    },
};
