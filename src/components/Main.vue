<template>
  <main class="main">
    <Filters/>
    <Button/>
    <!-- <Generators/> -->
    <Textiles/>
    <!-- <Compressor/> -->
    <Panels/>
  </main>
</template>

<script>
import Filters from "@/components/Filters.vue"
import Button from "@/components/Button.vue"
import Generators from "../components/Generators.vue";
import Compressor from "../components/Compressor.vue";
import Panels from "../components/Panels.vue";
import Textiles from "../components/Textiles.vue";
export default {
    components: {
        Filters, Button, Generators, Compressor, Panels, Textiles
    }
}
</script>

<style>

</style>