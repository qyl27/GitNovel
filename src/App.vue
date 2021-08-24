<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import axios from "axios";

  export default {
    name: "App",
    data: () => ({
    }),
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        let url = window.location.origin + (this as any).$route.path + "/novel.json";
        axios
            .get(url)
            .then(response => {
              let data = response.data;
              (this as any).$store.commit("setName", data.name);
            })
            .catch(error => {
              console.log(error);
              // Todo
            });
      }
    }
  }
</script>
