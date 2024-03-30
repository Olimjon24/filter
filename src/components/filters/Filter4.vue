<template>
  <div class="container content">
    <h1 class="content__title">Сепараторный фильтр</h1>
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
          name: "TXS2062",
          img: require("/src/assets/img/sep-filter/TXS2062(1).jpg"),
        },
        {
          name: "TXS2061",
          img: require("/src/assets/img/sep-filter/TXS2061(2).jpg"),
        },
        {
          name: "TXS2061",
          img: require("/src/assets/img/sep-filter/TXS2061(3).jpg"),
        },
        {
          name: "TXS2062",
          img: require("/src/assets/img/sep-filter/TXS2062.jpg"),
        },
        {
          name: "TXS2065",
          img: require("/src/assets/img/sep-filter/TXS2065.jpg"),
        },
        {
          name: "TXS2065",
          img: require("/src/assets/img/sep-filter/TXS2065(2).jpg"),
        },
        {
          name: "TXS2065",
          img: require("/src/assets/img/sep-filter/TXS2065(2).jpg"),
        },
        {
          name: "TXS2075",
          img: require("/src/assets/img/sep-filter/TXS2075.jpg"),
        },
        {
          name: "TXS2076",
          img: require("/src/assets/img/sep-filter/TXS2076.jpg"),
        },
        {
          name: "TXS2076",
          img: require("/src/assets/img/sep-filter/TXS2076(1).jpg"),
        },
        {
          name: "TXS2079",
          img: require("/src/assets/img/sep-filter/TXS2079.jpg"),
        },
        {
          name: "TXS2084",
          img: require("/src/assets/img/sep-filter/TXS2084.jpg"),
        },
        {
          name: "TXS2112",
          img: require("/src/assets/img/sep-filter/TXS2112.jpg"),
        },
        {
          name: "TXS2112",
          img: require("/src/assets/img/sep-filter/TXS2112(1).jpg"),
        },
        {
          name: "TXS2112",
          img: require("/src/assets/img/sep-filter/TXS2112(2).jpg"),
        },
        {
          name: "TXS2113",
          img: require("/src/assets/img/sep-filter/TXS2113.jpg"),
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