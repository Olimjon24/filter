<template>
  <div class="container content">
    <h1 class="content__title">Линейный фильтр</h1>
    <div class="content__cards">
      <div
        class="content__cards-card"
        v-for="(card, index) in filter"
        :key="index"
      >
        <img :src="card.img" alt="" class="card__img" />
        <!-- <h2 class="card__text">{{ card.name }}</h2> -->
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
          name: "name",
          img: require("/src/assets/img/line-filter/photo_2024-03-09_14-24-40.jpg"),
        },
        {
          name: "name",
          img: require("/src/assets/img/line-filter/photo_2024-03-09_14-25-06.jpg"),
        },
        {
          name: "name",
          img: require("/src/assets/img/line-filter/photo_2024-03-09_14-25-14.jpg"),
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