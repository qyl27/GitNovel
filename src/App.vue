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
    methods: {
      fetchData() {
        let url = window.location.origin + (this as any).$route.path + "/settings.json";
        axios
            .get(url)
            .then(response => {
              let data = response.data;
              let repo = data.repo;

              (this as any).$store.commit("setRepo", repo);

              axios
                  .get(repo + "/novel.json")
                  .then(response => {
                    let novelData = response.data;

                    (this as any).$store.commit("setNovelName", novelData.name);
                    (this as any).$store.commit("setNovelRepo", novelData.repo);
                  })
                  .catch(error => {
                    console.log(error);
                    // Todo
                  })
            })
            .catch(error => {
              console.log(error);
              // Todo
            });
      }
    }
  }
</script>
