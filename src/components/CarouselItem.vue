<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    navigation
    :loop="loop"
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
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }"
  >
    <swiper-slide v-for="filter in filters" :key="filter.id" >
      <router-link :to="filter.path" target="_blank">
        <div class="carousel__item">
          <div class="filter__item">
            <h2 class="filter__item-title">{{ filter.title }}</h2>
            <img :src="filter.img" alt="" class="filter__item-img" />
            <p class="filter__item-text">{{ filter.descr }}</p>
            <a href="#!" class="filter__item-btn">Подробнее</a>
          </div>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    filters: {
      typeof: Array,
      require: true,
    },
  },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
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
.carousel__item {
  display: flex;
  justify-content: center;
}
</style>