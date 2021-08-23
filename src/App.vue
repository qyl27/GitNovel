<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import axios from "axios";

  export default {
    name: "App",
    data: () => ({
    }),
    beforeCreate() {
      console.log(this);

      // Fixme
      this.Target.methods.fetchData()
    },
    methods: {
      fetchData() {
        let url = window.location.origin + this.$route.path + "/novel.json";
        console.log(url);
        axios.get(url);
      }
    }
  }
</script>
