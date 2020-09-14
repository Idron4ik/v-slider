/**
 * Component Options
 */

const settings = {
  props: {
    /**
     * Data of slider
     */
    sliderData: {
      type: Array,
      default: () => []
    },
    /**
     * Enable dot indicators/pagination
     */
    dots: {
      type: Boolean,
      default: true
    },

    /**
     * Fixed width a slide
     */
    fixedWidth: {
      type: Number,
      default: 0
    },

    /**
     * Enable prev/next navigation buttons
     */
    navButtons: {
      type: Boolean,
      default: true
    },

    /**
     * All settings as one object
     */
    options: {
      type: Object,
      default: () => ({})
    },

    /**
     * Object containing breakpoints and settings objects
     */
    responsive: {
      type: Array,
      default: () => null
    },

    /**
     * Number of slides to scroll
     */
    slidesToShow: {
      type: Number,
      default: 1
    },

    /**
     * Number of slides to show
     */
    slidesToScroll: {
      type: Number,
      default: 1
    },

    /**
     * Slide animation speed in milliseconds
     */
    speed: {
      type: Number,
      default: 300
    },

    /**
     * Swipe distance
     */
    swipeDistance: {
      type: Number,
      default: 100
    }
  },

  created () {
    this.setSettings();
  },

  methods: {
    /**
     *  Initial settings based on props and options object
     * @returns Object of options
     */

    setSettings () {
      // eslint-disable-next-line prefer-const
      let { options, ...initialSettings } = this.$props;

      if (options) {
        initialSettings = { ...initialSettings, ...options };
      }

      if (initialSettings.responsive) {
        initialSettings.responsive = this.orderBy(initialSettings.responsive, 'breakpoint');
        this.data.breakpoint = initialSettings.responsive.map((settings) => settings.breakpoint);
      }

      this.settings = initialSettings;
      this.data.oldSettings = this.settings;
    }
  }
};

export default settings;
