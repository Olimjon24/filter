<template class="wrapper">
  <Header />
  <Main />
  <router-view class="router-view"></router-view>
  <Footer />
</template>

<script>
import "./assets/style/main.scss";
import Header from "@/components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  created() {
    AOS.init();
  },
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>