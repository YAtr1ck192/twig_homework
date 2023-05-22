// import { mapState } from 'vuex';

export default {
    data() {
        return {
            /*
                  napTopPosition: null,
                  heightNavMenu: null,
                  isNavMenuFixed: false,
                  windowScrollPosition: 0,
                  isScrollUp: false,
                  */
        };
    },
    components: {},
    computed: {},
    methods: {
        /*
            scrollNavMenu() {
              if (this.isMobile) return;

              // показываем при скроле вверх
              this.isScrollUp = this.windowScrollPosition - window.pageYOffset > 0;

              // скрываем при достижении нижней точки меню
              this.windowScrollPosition = window.pageYOffset;

              if (this.isScrollUp) {
                this.isNavMenuFixed = this.windowScrollPosition > this.napTopPosition;
              } else
                this.isNavMenuFixed =
                  this.windowScrollPosition > this.napTopPosition + this.heightNavMenu;
            },
            */
    },

    mounted() {
        /*
            this.napTopPosition = this.$refs['nav-menu'].getBoundingClientRect().top;

            this.heightNavMenu = this.$refs['nav-menu'].getBoundingClientRect().height;

            window.addEventListener('scroll', () => {
              this.scrollNavMenu();
            });
            */
    },
};
