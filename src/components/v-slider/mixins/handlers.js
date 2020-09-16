/**
 * Handlers methods for mouse/touch events
 */
const mixin = {
  methods: {
    /**
     * Go next slide
     */
    next () {
      if (!this.isLastElement) {
        this.goTo(this.data.index + this.settings.slidesToScroll);
      }
    },

    /**
     * Go previous slide
     */
    prev () {
      if (!this.isFirstElement) {
        this.goTo(this.data.index - this.settings.slidesToScroll);
      }
    },

    /**
     * Start drag
     */
    dragStart (e) {
      this.pos.initial = this.data.translateX;

      this.pos.x1 = this.normalizeEvent(e).clientX;
      this.pos.y1 = this.normalizeEvent(e).clientY;
      this.pos.indexStart = this.getIndex();
      this.data.isDrag = false;
    },

    /**
     * Dragging
     * @param e
     */
    dragAction (e) {
      this.pos.x2 = this.pos.x1 - this.normalizeEvent(e).clientX;
      this.pos.y2 = this.pos.y1 - this.normalizeEvent(e).clientY;

      if (!this.data.isDrag && Math.abs(this.pos.x2) > 30 && Math.abs(this.pos.y2) < 12) {
        this.data.isDrag = true;
        this.pos.x1 = this.pos.x1 + (this.pos.x2 > 0 ? -1 : 1) * 30;
        this.pos.x2 = this.pos.x1 - this.normalizeEvent(e).clientX;
        this.data.transitionDuration = 0;
      }

      if (this.data.isDrag) {
        this.drag();
      }
    },

    drag () {
      this.pos.current = (-this.data.width.slide * this.pos.indexStart) + (this.convertPixelsToPercent(-(this.pos.x2) * this.settings.slidesToShow));

      if (!this.data.locked) {
        this.data.locked = true;
        this.ids.dragRequestAnimationFrameId = requestAnimationFrame(this.updatePosition);
      }
    },

    /**
     * Pagination Handler
     */
    goToSlide (x) {
      this.goTo(x * Math.round(this.settings.slidesToShow));
    },

    /**
     * Finished drag
     */
    dragEnd (e) {
      this.data.isDrag = false;

      if (this.data.locked) {
        cancelAnimationFrame(this.ids.dragRequestAnimationFrameId);
      }

      this.pos.final = this.data.translateX;

      const swipeDistance = this.convertPercentToPixels(this.pos.final - this.pos.initial);

      // Checks a need do scroll

      if (Math.abs(swipeDistance) < this.settings.swipeDistance) {
        swipeDistance && this.prepareGoTo(this.getIndex());
      } else {
        this.prepareGoTo(Math.abs(Math[swipeDistance > 0 ? 'ceil' : 'floor'](this.data.translateX / this.data.width.slide)));
      }
    }
  }
};

export default mixin;
