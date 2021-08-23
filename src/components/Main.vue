<template>
  <v-app>
    <v-main>
      <v-container fluid>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Footer from "./Footer.vue";

export default {
  name: "Main",
  components: {Footer}
}
</script>

<style scoped>

</style>
