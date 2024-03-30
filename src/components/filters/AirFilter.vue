<template>
  <div class="container content">
    <h1 class="content__title">Воздушный фильтр</h1>
    <div class="content__cards">
      <div
        class="content__cards-card"
        v-for="(card, index) in filter"
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
      filter: [
        {
          name: "TXA0061",
          img: require("/src/assets/img/air-filter/TXA0061.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "TXA0061",
          img: require("/src/assets/img/air-filter/TXA0061(1).jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "TXA0061",
          img: require("/src/assets/img/air-filter/TXA0061(2).jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "TXA0082",
          img: require("/src/assets/img/air-filter/TXA0082.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "TXA0095",
          img: require("/src/assets/img/air-filter/TXA0095.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "TXA0095",
          img: require("/src/assets/img/air-filter/TXA0095(1).jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "TXA0095",
          img: require("/src/assets/img/air-filter/TXA0095(2).jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "TXA0108",
          img: require("/src/assets/img/air-filter/TXA0108.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "TXA0108",
          img: require("/src/assets/img/air-filter/TXA0108(1).jpg"),
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