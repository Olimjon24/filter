<template>
  <div
  id="generator"
    class="container"
    data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
  >
    <h2
      class="filter__title"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      Генераторы
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
          title: "Генератор1",
          path: "/generator1",
          name: "Generator1",
          id: 1,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/filter-1.jpg"),
        },
        {
          title: "Генератор2",
          path: "/generator2",
          name: "Generator2",
          id: 2,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/filter-1.jpg"),
        },
        {
          title: "Генератор3",
          path: "/generator3",
          name: "Generator3",
          id: 3,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/filter-1.jpg"),
        },
        {
          title: "Генератор4",
          path: "/generator4",
          name: "Generator4",
          id: 4,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/filter-1.jpg"),
        },
        {
          title: "Генератор5",
          path: "/generator5",
          name: "Generator5",
          id: 5,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/filter-1.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
</style>