<template>
  <div class="container content">
    <h1 class="content__title">Магистральный фильтр</h1>
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
          name: "магистрального фильтра  H категории",
          img: require("/src/assets/img/mag-filter/mag-h-filter.jpg"),
          text: `Характеристики магистрального фильтра  H категории :
99.9999% по отношению к частицам размером 0.01 мкм.
Остаточное содержание масла: не более 0.01 мг/м3.`,
        },
        {
          name: "магистрального фильтра  U категории",
          img: require("/src/assets/img/mag-filter/mag-u-filter.jpg"),
          text: `Характеристики магистрального фильтра U категории :
99.9999% по отношению к частицам размером 1 мкм.
Остаточное содержание масла: не более 0.5 мг/м3.`,
        },
      ],
    }
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