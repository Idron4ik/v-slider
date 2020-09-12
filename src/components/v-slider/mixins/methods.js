/**
 * All not public methods doesn't classified elsewhere
 */
const mixin = {
  methods: {

    /**
     * Is a Throttle Function
     * @param func
     * @param ms
     * @returns {function}
     */
    throttle(func, ms) {
      let isThrottled = false;
      let savedArgs = null;
      let savedThis = null;

      function wrapper() {
        if (isThrottled) {
          savedArgs = arguments;
          savedThis = this;
          return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(() => {
          isThrottled = false;
          if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
          }
        }, ms);
      }

      return wrapper;
    },

    /**
     * Function of order
     * @param objs
     * @param field
     * @returns { Object}
     */
    orderBy(objs, field) {
      return objs.sort((a, b) => ((a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0)));
    },

    /**
     * Set the settings of necessary breakpoint
     */
    setSettingsOfCurrentBreakpoint() {
      let breakpoint = 0;
      let index = 0;

      this.data.breakpoint.forEach((bp, i) => {
        if (bp <= this.data.width.window) {
          breakpoint = bp;
          index = i;
        }
      });

      this.settings = !breakpoint && !index ? this.data.oldSettings : { ...this.data.oldSettings, ...this.settings.responsive[index].settings };
    },

    /**
     * Calculated metrics(width, counts, size) of carousel
     * */

    computedMetricsCarousel() {
      this.data.width.window = window.innerWidth;

      this.setSettingsOfCurrentBreakpoint();

      this.data.pages = Math.ceil(this.data.countItems / this.settings.slidesToShow);

      this.data.width.container = this.data.countItems * (100 / this.settings.slidesToShow);

      this.data.width.wrapper = this.$refs.slider.offsetWidth;

      this.data.width.slide = 100 / this.data.countItems;
    },

    /**
     * Method called after finish animation
     */
    transitionend() {
      this.data.locked = false;
      this.data.statusAnimationClass = false;
      this.data.transitionDuration = 0;
      this.dispatchEvent('afterChange');
    },

    /**
     * Update Translate X in slider
     */
    updatePosition() {
      this.data.locked = false;
      this.data.translateX = this.pos.current;
    },
  },
};

export default mixin;
