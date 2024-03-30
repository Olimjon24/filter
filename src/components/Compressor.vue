<template>
  <div
    id="compressor"
    class="container"
    data-aos="flip-up"
    data-aos-easing="linear"
    data-aos-duration="1500"
  >
    <h2
      class="filter__title"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      Компрессоры
    </h2>
    <div class="filter">
      <CarouselItem :filters="compressor" />
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
      compressor: [
        {
          title: "Компрессор1",
          path: "/compressor1",
          name: "Compressor1",
          id: 1,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/filter-1.jpg"),
        },
        {
          title: "Компрессор2",
          path: "/compressor2",
          name: "Compressor2",
          id: 2,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/filter-1.jpg"),
        },
        {
          title: "Компрессор3",
          path: "/compressor3",
          name: "Compressor3",
          id: 3,
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