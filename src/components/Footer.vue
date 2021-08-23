<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ year }} - GitNovel
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    year: new Date().getFullYear()
  })
}
</script>

<style scoped>

</style>
