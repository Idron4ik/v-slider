<template>
  <div
    ref="slider"
    :class="['v-slider', {'v-slide--ssr': isSSR, 'v-slider--loaded' : data.isLoaded}]"
  >
    <div
      :class="['v-slider__wrapper',
               {'disabled': data.statusAnimationClass},
               {'dragging': data.isDrag}
      ]"
      @touchstart="dragStart"
      @touchend="dragEnd"
      @touchmove="dragAction"
    >
      <div
        ref="slides"
        class="v-slider__items"
        :style="{
          width: `${isSSR ? '10000' : data.width.container}%`,
          transform: `translateX(${data.translateX}%)`,
          transitionDuration: `${data.transitionDuration}ms`,
        }"
      >
        <div
          v-for="(slide, i) in sliderData"
          :key="i"
          :class="['v-slider__item']"
          :style="[!isSSR && {width:`${data.width.slide}%`}]"
        >
          <slot
            name="slide"
            :item="slide"
          />
        </div>
      </div>
    </div>

    <div v-if="settings.dots" :class="['v-slider__nav', {'disabled': data.statusAnimationClass}]">
      <button
        v-for="(page, index) in data.pages"
        :key="index"
        :class="['v-page', {'v-page--active': index === indexPage}]"
        tabindex="-1"
        :aria-label="`Carousel Page ${index}`"
        @click="goToSlide(index)"
      />
    </div>

    <template v-if="settings.navButtons">
      <button
        :class="['v-slider__control prev', {disabled: isFirstElement}]"
        aria-label="prev button"
        :disabled="isFirstElement"
        @click="prev"
      >
        &lt;
      </button>

      <button
        :class="['v-slider__control next', {disabled: isLastElement}]"
        aria-label="next button"
        :disabled="isLastElement"
        @click="next"
      >
        &gt;
      </button>
    </template>
  </div>
</template>

<script>
import helpers from './../mixins/helpers';
import options from './../mixins/settings';
import handlers from './../mixins/handlers';
import methods from './../mixins/methods';

export default {
  name: 'VSlider',

  mixins: [helpers, options, handlers, methods],

  data () {
    return {
      isSSR: true,

      settings: {},

      data: {
        slides: null,
        index: 0,
        countItems: 0,
        pages: 0,
        translateX: 0,
        locked: false,
        statusAnimationClass: false,
        oldSettings: null,
        breakpoint: [],
        transitionDuration: 0,
        isLoaded: false,
        width: {
          container: 0,
          wrapper: 0,
          slide: 0,
          window: 0
        }
      },

      pos: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0,
        final: 0,
        initial: 0,
        indexStart: 0,
        current: 0
      },

      ids: {
        dragRequestAnimationFrameId: null,
        resizeTimer: null
      }

    };
  },

  beforeDestroy () {
    this.destroy();
    window.removeEventListener('resize', this.resize);
  },

  beforeMount () {
    this.goTo = this.throttle(this.goTo, this.settings.speed);
  },

  mounted () {
    this.isSSR = false;
    this.initSlider();
    window.addEventListener('resize', this.resize);
  },

  methods: {
    /**
     * Initialization slider
     * */
    initSlider () {
      this.data.slides = this.$refs['slides'];

      this.data.countItems = this.sliderData.length;

      this.computedMetricsCarousel();

      this.data.isLoaded = true;
      this.dispatchEvent('init');
    },

    /**
     * Reset settings to default
     * */
    reset () {
      this.data.index = 0;
      this.pos.indexStart = 0;
      this.data.translateX = 0;
    },

    /**
     * Rebuild carousel
     * */

    rebuild () {
      this.reset();
      this.computedMetricsCarousel();
      this.dispatchEvent('rebuild');
    },

    /**
     * Resize event
     * */
    resize () {
      clearTimeout(this.ids.resizeTimer);

      this.ids.resizeTimer = setTimeout(() => {
        this.rebuild();
        this.dispatchEvent('breakpoint');
      }, 250);
    },
    /**
     * Destroy carousel
     * */
    destroy () {
      // todo add destroy methods
      this.dispatchEvent('destroy');
    },

    /**
     * Go to slide
     * @param x
     * @param speed
     * */
    goTo (x, speed = this.settings.speed) {
      if (this.data.locked) return;

      this.data.index = this.normalizeIndex(x);

      this.data.locked = true;

      this.data.statusAnimationClass = true;
      this.data.transitionDuration = speed;

      let scrollDistance = -this.data.width.slide * this.data.index;

      /* If slide is last element then will scroll to him  */
      if (this.data.countItems % this.settings.slidesToShow !== 0 && this.data.index + this.settings.slidesToShow >= this.data.countItems) {
        scrollDistance = -this.data.width.slide * (this.data.countItems - this.settings.slidesToShow);
      }

      this.data.translateX = scrollDistance;

      setTimeout(this.transitionend, speed);

      this.dispatchEvent('beforeChange');
    }
  }
};
</script>
 <style lang="scss">
    .v-slider {
      position: relative;
      width: 100%;
      opacity: 0;

      &--loaded {
        opacity: 1;
      }

      &__wrapper {
        overflow: hidden;
        position: relative;
        z-index: 1;

        &.dragging {
          pointer-events: none;
        }

        &.disabled {
          pointer-events: none;
        }

        &:hover{
          will-change: transform;
        }
      }

      &__items {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        transition-property: transform;
        transition-timing-function: ease-out;
      }

      &__item {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 1s;
        position: relative;
      }

      &__control {
        position: absolute;
        top: 50%;
        width: 40px;
        margin-top: -32px;
        height: 64px;
        user-select: none;
        background-color: rgba(48, 48, 48, 0.3);
        border: none;
        border-radius: 4px;
        z-index: 1;
        cursor: pointer;
        font-family: monospace;
        font-size: 17px;
        color: #fff;
        pointer-events: all;
        opacity: 1;

        &.disabled {
          cursor: default;
          opacity: 0.3;
        }

        &.prev {
          left: 0;
        }

        &.next {
          right: 0;
        }
      }

      &__nav {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        z-index: 1;
        margin-left: -12px;

        &.disabled {
          pointer-events: none;
        }

        .v-page {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #E0E0E0;
          transition: background-color 300ms;
          border: none;
          font-size: 0;
          margin-left: 12px;
          cursor: pointer;

          &--active {
            cursor: default;
            pointer-events: none;
          }

          &--active {
            background-color: #F97988;
          }
        }
      }
    }
  </style>
