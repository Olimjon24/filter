<template>
  <div class="container content">
    <h1 class="content__title">Generator2</h1>
    <div class="content__cards">
      <div
        class="content__cards-card"
        v-for="(card, index) in filter"
        :key="index"
      >
        <img :src="card.img" alt="" class="card__img" />
        <h2 class="card__text">{{ card.name }}</h2>
        <p class="card__desc">{{ card.text }}</p>
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
      filter: [
        {
          name: "name",
          img: require("/src/assets/img/Airfilter/card.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/Airfilter/card.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/Airfilter/card.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/Airfilter/card.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/Airfilter/card.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/Airfilter/card.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/Airfilter/card.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/Airfilter/card.jpg"),
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