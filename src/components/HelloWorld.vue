<template>
  <div>
    <h1>0: 1 \ 600: fixedWidth 224 \ 1024: 4</h1>
    <VSlider
      :sliderData="sliderData"
      :slidesToShow="1"
      :slidesToScroll="1"
      :responsive="[
        {
          breakpoint: 600,
          settings: {
            fixedWidth: 224 ,
            slidesToScroll: 3,
            slidesToShow: 3,

          }
        },{
          breakpoint: 1024,
          settings: {
            fixedWidth: 0,
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }]"
    >
      <template #slide="{item}">
        <div> {{ item.name }}</div>
      </template>
    </VSlider>

    <h1>0: fixedWidth 224 \ 600: \ 1024: 5</h1>

    <VSlider
        :sliderData="sliderData"
        :fixedWidth="224"
        :slidesToShow="1"
        :slidesToScroll="1"
        :responsive="[
        {
          breakpoint: 600,
          settings: {
            fixedWidth: false,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }]"
    >
      <template #slide="{item}">
        <div> {{ item.name }}</div>
      </template>
    </VSlider>

    <h1>0: 2 \ 600: 1 \ 1024: fixedWidth 224</h1>

    <VSlider
        :sliderData="sliderData"
        :slidesToShow="2"
        :slidesToScroll="2"
        :responsive="[
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },{
          breakpoint: 1024,
          settings: {
            fixedWidth: 224,
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }]"
    >
      <template #slide="{item}">
        <div> {{ item.name }}</div>
      </template>
    </VSlider>
  </div>

</template>

<script>

import VSlider from './v-slider/base/VSliderBase';

export default {
  name: 'HelloWorld',

  components: {
    VSlider,
  },

  data() {
    return {
      sliderData: [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
      ],
    };
  },
};
</script>

<style lang="scss">
  h1 {
    font-family: 'Roboto', sans-serif;
  }

  .v-slider {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #333;
    letter-spacing: 0.15em;
    font-size: 22px;

    &__item {
      background: #FFCF47;
      border-radius: 2px;
      height: 300px;
      width: 171.42px;
      border: 2px solid black;
    }
  }
</style>
