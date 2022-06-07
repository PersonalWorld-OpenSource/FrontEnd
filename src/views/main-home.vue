<template>

  <NormalHome v-if="this.$store.getters.inLogin"></NormalHome>
  <LRHome v-else></LRHome>
</template>

<script>
import LRHome from './home-all.vue'
import NormalHome from "./main.vue";
export default {

  name: "main-home",
  data() {
    return {
      inLogin: null
    }
  },
  created() {
  },
  components: {
    LRHome,
    NormalHome
  }

}
</script>
