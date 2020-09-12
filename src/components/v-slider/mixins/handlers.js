/**
 * Handlers methods for mouse/touch events
 */
const mixin = {
  methods: {
    /**
     * Go next slide
     */
    next() {
      if (!this.isLastElement) {
        this.goTo(this.data.index + this.settings.slidesToScroll);
      }
    },

    /**
     * Go previous slide
     */
    prev() {
      if (!this.isFirstElement) {
        this.goTo(this.data.index - this.settings.slidesToScroll);
      }
    },

    /**
     * Start drag
     */
    dragStart(e) {
      e.preventDefault();
      this.data.transitionDuration = 0;
      this.pos.initial = this.data.translateX;

      this.pos.x1 = this.normalizeEvent(e).clientX;
      this.pos.indexStart = this.getIndex();
      this.data.isDrag = true;

      if (e.type !== 'touchstart') {
        document.onmouseup = this.dragEnd;
        document.onmousemove = this.dragAction;
      }
    },

    /**
     * Dragging
     * @param e
     */
    dragAction(e) {
      this.$emit('drag', this);
      this.pos.x2 = this.pos.x1 - this.normalizeEvent(e).clientX;
      this.pos.current = (-this.data.width.slide * this.pos.indexStart) + (this.convertPixelsToPercent(-(this.pos.x2) * this.settings.slidesToShow));

      if (!this.data.locked) {
        this.data.locked = true;
        this.ids.dragRequestAnimationFrameId = requestAnimationFrame(this.updatePosition);
      }
    },

    /**
     * Pagination Handler
     */
    goToSlide(x) {
      this.goTo(x * Math.round(this.settings.slidesToShow));
    },

    /**
     * Finished drag
     */
    dragEnd() {
      if (this.data.locked) {
        cancelAnimationFrame(this.ids.dragRequestAnimationFrameId);
      }

      document.onmouseup = null;
      document.onmousemove = null;

      this.data.isDrag = false;

      this.pos.final = this.data.translateX;

      const swipeDistance = this.convertPercentToPixels(this.pos.final - this.pos.initial);

      // Checks a need do scroll

      if (Math.abs(swipeDistance) < this.settings.swipeDistance) {
        this.data.translateX = this.pos.initial;
        return;
      }

      let swipeIndex = this.getIndex();

      // If slide is a first element then will scroll to him
      if (this.data.translateX > 0) swipeIndex = 0;

      // If slide is a last element then will scroll to him
      if (swipeIndex + this.settings.slidesToShow > this.data.countItems - 1) swipeIndex = this.data.countItems - this.settings.slidesToShow;

      this.data.locked = false;

      this.goTo(swipeIndex, 200);
    },
  },
};

export default mixin;
