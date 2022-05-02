<template>
  <v-app className="bg-grey-lighten-3">
    <v-main>

<<<<<<< Updated upstream
=======
      <Header></Header>

      <router-view></router-view>

      <Footer></Footer>


>>>>>>> Stashed changes
    </v-main>
  </v-app>
</template>

<script>
<<<<<<< Updated upstream

=======
import Header from './components/header.vue'
import Footer from './components/footer.vue'
>>>>>>> Stashed changes

export default {
  name: 'App',

  components: {
<<<<<<< Updated upstream

  },

  data: () => ({
    //
  }),
}
</script>
=======
    Header,
    Footer,
  },
}
</script>
>>>>>>> Stashed changes
