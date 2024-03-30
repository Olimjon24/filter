<template>
  <nav class="header__nav">
    <div class="container nav">
      <a href="#!" class="header__logo"><img class="logo" src="../assets/img/logo.jpg" alt=""></a>
      <div
          class="header__burger"
          @click="activeBtn"
          :class="{ active: active }"
        >
          <span class="header__burger-line"></span>
          <span class="header__burger-line"></span>
          <span class="header__burger-line"></span>
        </div>
      <ul class="header__nav-list" :class="{ active: active }">
        <li >
          <a href="#filter" class="header__nav-link"> Фильтры </a>
        </li>
        <li >
          <a href="#generator" class="header__nav-link"> Генераторы </a>
        </li>
        <li >
          <a href="#textil" class="header__nav-link"> Текстиль </a>
        </li>
        <li >
          <a href="#compressor" class="header__nav-link"> Компрессоры </a>
        </li>
        <li >
          <a href="#panel" class="header__nav-link"> Панели </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      
      active: false,
    };
  },
  methods: {
    activeBtn() {
      this.active = !this.active;
    },
  },
};
</script>

<style>
</style>