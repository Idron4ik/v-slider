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
      e.preventDefault();
      this.data.transitionDuration = 0;
      this.pos.initial = this.data.translateX;

      this.pos.x1 = this.normalizeEvent(e).clientX;
      // this.pos.y1 = this.normalizeEvent(e).clientY;
      this.pos.indexStart = this.getIndex();
      this.data.isDrag = true;

      // if (e.type !== 'touchstart') {
      //   document.onmouseup = this.dragEnd;
      //   document.onmousemove = this.dragAction;
      // }
    },

    /**
     * Dragging
     * @param e
     */
    dragAction (e) {
      this.pos.x2 = this.pos.x1 - this.normalizeEvent(e).clientX;
      // if (Math.abs(distance) < this.settings.swipeDistance) return;

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
    dragEnd () {
      if (this.data.locked) {
        cancelAnimationFrame(this.ids.dragRequestAnimationFrameId);
      }

      // document.onmouseup = null;
      // document.onmousemove = null;

      this.data.isDrag = false;

      this.pos.final = this.data.translateX;

      const swipeDistance = this.convertPercentToPixels(this.pos.final - this.pos.initial);

      // Checks a need do scroll

      if (Math.abs(swipeDistance) < this.settings.swipeDistance) {
        this.prepareGoTo(this.getIndex());
      } else {
        this.prepareGoTo(Math.abs(Math[swipeDistance > 0 ? 'ceil' : 'floor'](this.data.translateX / this.data.width.slide)));
      }
    }
  }
};

export default mixin;
