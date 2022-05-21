<template>
  <v-app className="bg-grey-lighten-3">
    <v-main>
      <Header></Header>

      <router-view></router-view>

      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },
};
</script>
