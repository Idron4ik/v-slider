/**
 * Helpers methods and computed
 */
const mixin = {
  computed: {
    /**
     * Checks if this is the first element
     * @returns {boolean}
     */
    isFirstElement () {
      return this.data.index <= 0;
    },

    /**
     * Checks if this is the last element
     * @returns {boolean}
     */
    isLastElement () {
      return this.data.index + this.settings.slidesToShow > this.data.countItems - 1;
    },

    /**
     * Calculate the number of page
     * @returns {number}
     */
    indexPage () {
      let index = Math.round(this.data.index / Math.round(this.settings.slidesToShow));

      if (index < 0) {
        index = 0;
      } else if (index >= this.data.pages - 1 || this.isLastElement) {
        index = this.data.pages - 1;
      }

      return index;
    }
  },
  methods: {
    /**
     * Convert Pixels to percent
     * @param pixels
     * @returns {number}
     */
    convertPixelsToPercent (pixels) {
      return pixels / this.data.width.wrapper * 100 / this.data.countItems;
    },

    /**
     * Convert Percent to Pixels
     * @param percent
     * @returns {number}
     */
    convertPercentToPixels (percent) {
      return percent * this.data.width.wrapper / 100 * this.data.countItems;
    },

    /**
     * Normalize Event
     * @param e
     * @returns {Event}
     */

    normalizeEvent (e) {
      return e.touches ? e.touches[0] : e;
    },

    /**
     * Get number of slide in the real time
     * @returns {number}
     */
    getIndex () {
      return Math.abs(Math.round(this.data.translateX / this.data.width.slide));
    },

    /**
     * Normalize number of slide
     * @param x
     * @returns {number}
     */
    normalizeIndex (x) {
      let index = x;

      if (x < 0) {
        index = 0;
      } else if (x > this.data.countItems - 1) {
        index = this.data.countItems - 1;
      }

      return index;
    },

    /**
     * Send event
     * @param {String} name - eventName
     */

    dispatchEvent (name) {
      this.$emit(name, { data: this.data, settings: this.settings, pos: this.pos });
    }
  }
};

export default mixin;
