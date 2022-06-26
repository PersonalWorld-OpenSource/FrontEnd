<template>
  <h3 class="pa-10">Lawyer Search</h3>
  <v-card
    v-for="index in lawyers"
    class="ma-5 ml-10 rounded-sm elevation-5 mx-auto d-flex justify-center"
    width="1100"
  >
    <v-container class="d-flex align-lg-center">
      <v-img
          :src="index.urlImage"
          max-width="188"
          max-height="157"
      ></v-img>
      <div class="ml-lg-5">
        <v-card-title>
          {{ index.fisrtName }} {{ index.lastName }}
        </v-card-title>
        <v-row>
          <v-row class="ml-lg-3">
            <v-card-text>
              {{ index.description }}
            </v-card-text>
          </v-row>
        </v-row>
      </div>
    </v-container>
    <router-link class="text-decoration-none text-black" :to="`/lawyer/${index.id}`">
      <v-btn
        class="mt-16 ma-10 ml-10 d-flex justify-end font-weight-black boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
      >
        <v-icon class="ml-n2 ma-2">mdi-chevron-right-circle-outline</v-icon>
        Ver perfil
      </v-btn>
    </router-link>
  </v-card>
</template>

<script>
import { LawyersApiService } from "../services/lawyers-api.service";

export default {
  name: "SearchedLawyer",
  data() {
    return {
      lawyers: [],
      oneLawyer: [],
      lawyersService: null,
    };
  },

  created() {
    if((!this.$store.getters.inLogin) || (this.$store.getters.getUser.type !== 'client')) {
      window.location.href = '/'
    }
    this.lawyersService = new LawyersApiService();
    this.lawyersService.getAllLawyers().then((response) => {
      this.lawyers = response.data;
    });
    console.log(this.lawyers);
  },
  methods: {},
};
</script>

<style scoped></style>