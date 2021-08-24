<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ year }} - {{ name }}
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import store from '../vuex-store';

export default {
  name: "Footer",
  data: () => ({
    year: new Date().getFullYear(),
    name: console.log(this)
  }),
  methods: {
    getName(): string {
      return (this as any).$store.appName;
    }
  }
}
</script>

<style scoped>

</style>
