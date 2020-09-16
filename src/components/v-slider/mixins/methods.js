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
    throttle (func, ms) {
      let isThrottled = false;
      let savedArgs = null;
      let savedThis = null;

      function wrapper () {
        if (isThrottled) {
          savedArgs = arguments;
          savedThis = this;
          return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
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
    orderBy (objs, field) {
      return objs.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
    },

    /**
     * Set the settings of necessary breakpoint
     */
    setSettingsOfCurrentBreakpoint () {
      let breakpoint = 0;
      let index = 0;

      this.data.breakpoint.forEach((bp, i) => {
        if (bp <= this.data.width.window) {
          breakpoint = bp;
          index = i;
        }
      });

      if (!breakpoint && !index) {
        this.settings = this.data.oldSettings;
      } else {
        let tmp = this.settings.responsive.slice(0, index) || [];
        tmp = tmp.reduce((acc, item) => ({ ...acc, ...item.settings }), {});
        this.settings = { ...this.data.oldSettings, ...tmp, ...this.settings.responsive[index].settings };
      }
    },

    /**
     * Calculated metrics(width, counts, size) of carousel
     * */

    computedMetricsCarousel () {
      this.data.width.window = window.innerWidth;

      this.setSettingsOfCurrentBreakpoint();

      this.data.width.wrapper = this.$refs['slider'].offsetWidth;

      if (this.settings.fixedWidth) {
        this.data.width.container = (this.settings.fixedWidth / this.data.width.wrapper) * this.data.countItems * 100;
        this.settings.slidesToShow = this.data.countItems / this.data.width.container * 100;
      } else {
        this.data.width.container = this.data.countItems * (100 / this.settings.slidesToShow);
      }

      this.data.pages = Math.ceil(this.data.countItems / this.settings.slidesToShow);

      this.data.width.slide = 100 / this.data.countItems;
    },

    /**
     * Method called after finish animation
     */
    transitionend () {
      this.data.locked = false;
      this.data.statusAnimationClass = false;
      this.data.transitionDuration = 0;
      this.dispatchEvent('afterChange');
    },

    /**
     * Update Translate X in slider
     */
    updatePosition () {
      this.data.locked = false;
      this.data.translateX = this.pos.current;
    },

    /**
     * Prepare index before call goto
     */
    prepareGoTo (index) {
      // If slide is a first element then will scroll to him
      if (this.data.translateX > 0) index = 0;

      // If slide is a last element then will scroll to him
      if (index + this.settings.slidesToShow > this.data.countItems - 1) index = this.data.countItems - this.settings.slidesToShow;

      this.data.locked = false;

      this.goTo(index, 200);
    }
  }
};

export default mixin;
