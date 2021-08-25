<template>
  <v-app-bar density="compact">
    <v-app-bar-title>{{ name }}</v-app-bar-title>
    <v-divider inset="true" vertical="true"></v-divider>
    <v-btn to="/" text="首页"></v-btn>
    <v-btn text="仓库" :href="repo"></v-btn>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  name: "AppBar",
  data: () => ({
  }),
  computed: {
    name() {
      return (this as any).$store.state.app.name;
    },
    repo() {
      return (this as any).$store.state.app.repo;
    }
  }
}
</script>

<style scoped>

</style>
