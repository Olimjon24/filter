<template>
  <div
  id="textil"
    class="container"
    data-aos="flip-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
  >
    <h2
      class="filter__title"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      Текстиль
    </h2>
    <div class="filter">
      <CarouselItem :filters="textiles" />
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
      textiles: [
        {
          title: "Текстиль",
          path: "/textile1",
          name: "Textile1",
          id: 1,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/textile/4.jpg"),
        },
        // {
        //   title: "Текстиль2",
        //   path: "/textile2",
        //   name: "Textile2",
        //   id: 2,
        //   descr:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
        //   img: require("@/assets/img/filter-1.jpg"),
        // },
        // {
        //   title: "Текстиль3",
        //   path: "/textile3",
        //   name: "Textile3",
        //   id: 3,
        //   descr:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
        //   img: require("@/assets/img/filter-1.jpg"),
        // },
        // {
        //   title: "Текстиль4",
        //   path: "/textile4",
        //   name: "Textile4",
        //   id: 4,
        //   descr:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
        //   img: require("@/assets/img/filter-1.jpg"),
        // },
        // {
        //   title: "Текстиль5",
        //   path: "/textile5",
        //   name: "Textile5",
        //   id: 5,
        //   descr:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
        //   img: require("@/assets/img/filter-1.jpg"),
        // },
      ],
    };
  },
};
</script>

<style>
</style>