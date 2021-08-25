<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <Intro></Intro>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Footer from "../components/main/Footer.vue";
import AppBar from "../components/main/AppBar.vue";
import Intro from "../components/main/Intro.vue";

export default {
  name: "Main",
  components: {Intro, AppBar, Footer}
}
</script>

<style scoped>

</style>
