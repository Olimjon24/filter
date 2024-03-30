<template >
  <div
    id="filter"
    class="container"
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
  >
    <h2
      class="filter__title"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      Фильтры
    </h2>
    <div class="filter">
      <CarouselItem :filters="filters" />
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/CarouselItem.vue";
export default {
  components: {
    CarouselItem,
  },
  data() {
    return {
      filters: [
        {
          title: "Воздушный фильтр",
          path: "/airFilter",
          name: "AirFilter",
          id: 1,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/air-filter/TXA0082.jpg"),
        },
        {
          title: "Масленный фильтр",
          path: "/oilFilter",
          name: "OilFilter",
          id: 2,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/oil-filter/TXO1079.jpg"),
        },
        {
          title: "Магистральный фильтр",
          path: "/filter3",
          name: "Filter3",
          id: 3,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/mag-filter/mag-h-filter.jpg"),
        },
        {
          title: "Сепараторный фильтр",
          path: "/filter4",
          name: "Filter4",
          id: 4,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/sep-filter/TXS2065.jpg"),
        },
        {
          title: "Линейный фильтр",
          path: "/filter5",
          name: "Filter5",
          id: 5,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/line-filter/photo_2024-03-09_14-24-40.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
</style>