<template>
  <div class="container content">
    <h1 class="content__title">Текстиль</h1>
    <div class="content__cards">
      <div
        class="content__cards-card"
        v-for="(card, index) in textile"
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
      textile: [
        {
          name: "name",
          img: require("/src/assets/img/textile/1.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/2.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/3.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/4.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/5.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/6.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/7.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/8.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/9.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/10.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/11.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/12.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/13.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/14.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolores at labore illum similique hic minus nulla tempore, necessitatibus obcaecati architecto temporibus. Praesentium ipsum ad quidem nobis dignissimos. Eligendi, in.",
        },
        {
          name: "name",
          img: require("/src/assets/img/textile/15.jpg"),
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