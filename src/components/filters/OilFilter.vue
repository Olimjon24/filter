<template>
  <div class="container content">
    <h1 class="content__title">Масленный фильтр</h1>
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
          name: "TXO1055",
          img: require("/src/assets/img/oil-filter/TXO1055.jpg"),
        },
        {
          name: "TXO1055",
          img: require("/src/assets/img/oil-filter/TXO1055(1).jpg"),
        },
        {
          name: "TXO1056",
          img: require("/src/assets/img/oil-filter/TXO1056.jpg"),
        },
        {
          name: "TXO1056",
          img: require("/src/assets/img/oil-filter/TXO1056(1).jpg"),
        },
        {
          name: "TXO1069",
          img: require("/src/assets/img/oil-filter/TXO1069.jpg"),
        },
        {
          name: "TXO1073",
          img: require("/src/assets/img/oil-filter/TXO1073.jpg"),
        },
        {
          name: "TXO1079",
          img: require("/src/assets/img/oil-filter/TXO1079.jpg"),
        },
        {
          name: "TXO1080",
          img: require("/src/assets/img/oil-filter/TXO1080.jpg"),
        },
        {
          name: "TXO1080",
          img: require("/src/assets/img/oil-filter/TXO1080(1).jpg"),
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