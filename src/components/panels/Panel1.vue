<template>
  <div class="container content">
    <h1 class="content__title">Компрессорное масло</h1>
    <div class="content__cards">
      <div
        class="content__cards-card"
        v-for="(card, index) in panels"
        :key="index"
      >
        <img :src="card.img" alt="" class="card__img" />
        <h2 class="card__text">{{ card.name }}</h2>
        <!-- <p class="card__desc">{{ card.text }}</p> -->
      </div>
    </div>
    <router-link to="" @click="closePage">
      <p class="airfilter__desc">Скрыть описания</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panels: [
        {
          name: "Gazpromneft Compressor F Sinth (синтетика) - 46 (20L)",
          img: require("/src/assets/img/maslo/- 46(20L).jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "Gazpromneft Compressor F Sinth (синтетика) - 46 (20L)",
          img: require("/src/assets/img/maslo/46 (20L)(1).jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
      ],
    };
  },
  methods: {
    closePage() {
      window.close();
    }
  }
};
</script>

<style>
</style>