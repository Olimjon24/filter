<template>
  <div
    id="panel"
    class="container"
    data-aos="zoom-in-right"
    data-aos-offset="700"
    data-aos-easing="ease-in-sine"
  >
    <h2
      class="filter__title"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      Компрессорное масло
    </h2>
    <div class="filter">
      <PanelItem :panels="panels" class="panels" />
    </div>
  </div>
</template>

<script>
import PanelItem from "@/components/PanelsItem.vue";
export default {
  components: {
    PanelItem,
  },
  data() {
    return {
      panels: [
        {
          title: "Компрессорное масло",
          path: "/panel1",
          name: "Panel1",
          id: 1,
          descr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.",
          img: require("@/assets/img/maslo/- 46(20L).jpg"),
        },
      ],
    };
  },
};
</script>

<style>
.panels {
  max-width: 600px;
}
</style>