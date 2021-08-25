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
      (this as any).fetchData();
    },
    inject: ["github", "githubClient"],
    methods: {
      fetchData() {
        let url = window.location.origin + (this as any).$route.path + "/settings.json";
        axios
            .get(url)
            .then(response => {
              let data = response.data;

              let repo = this.$githubClient.repo(data.owner + "/" + data.repo);
              let branch = repo.branch(data.branch);
              console.log(branch);
            })
            .catch(error => {
              console.log(error);
              // Todo
            });
      }
    }
  }
</script>
