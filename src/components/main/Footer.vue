<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      Copyright &copy; {{ year }} {{ name }}
    </v-col>
  </v-footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
  data: () => ({
    year: new Date().getFullYear()
  }),
  computed: {
    name() {
      return (this as any).$store.state.app.name;
    }
  }
}
</script>

<style scoped>

</style>
