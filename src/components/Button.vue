<template>
  <div class="button__block" :class="{active: !btn}">
    <ul class="button__list">
      <li @click="activeBtn">
        <Call/>
      </li>
      <li><a href="https://t.me/torexfiltressale" class="button__item icon-tg" target="_blank"></a></li>
      <li><a href="https://www.instagram.com/torexfilterss/" class="button__item icon-inst" target="_blank"></a></li>
      <li><a href="https://www.facebook.com/people/Munis-Saidov/pfbid02LjJ2zEWXosV8NdPzNp5joaUh4A8E3q4va8HezMsfHxzpLgJGfcYEtCxzMb7VT9Dvl/" class="button__item icon-face" target="_blank"></a></li>
      <li><a href="tel:+998997652010" class="button__item icon-phone"></a></li>
    </ul>
  </div>
</template>

<script>
import Call from "@/components/Call.vue"
export default {
    components: {
      Call
    },
    data() {
    return {
      btn: true
    }
  },
  methods: {
    activeBtn() {
      this.btn = !this.btn
    }
  }
}
</script>

<style>

</style>