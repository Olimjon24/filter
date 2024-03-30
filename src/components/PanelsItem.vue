<template>
  <swiper
    :grabCursor="grabCursor"
    :loop="loop"
    :centeredSlides="false"
    :autoplay="false"
    :space-between="50"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 50,
      },

      991: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    }"
  >
    <swiper-slide v-for="panel in panels" :key="panel.id">
      <router-link :to="panel.path" target="_blank">
        <div class="carousel__item">
          <div class="filter__item">
            <h2 class="filter__item-title">{{ panel.title }}</h2>
            <img :src="panel.img" alt="" class="filter__item-img" />
            <!-- <p class="filter__item-text">{{ panel.descr }}</p> -->
            <a href="#!" class="filter__item-btn">Подробнее</a>
          </div>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    panels: {
      typeof: Array,
      require: true,
    },
  },
  data() {
    return {
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    };
  },
};
</script>

<style>
</style>