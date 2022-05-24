<template>
  <div>
    <div class="d-flex justify-center mt-16">
      <v-container class="">
        <h2 class="text-center">{{ oneLawyer.name }}</h2>
        <v-img :src="`${oneLawyer.url}`" max-height="400" max-width="400" class="rounded ma-auto mt-5" position="center"></v-img>
      </v-container>
      <v-container>
        <v-card class="caso ma-5 rounded-lg">
          <v-card-title >
            <h5 class="bio">Biografia</h5>
          </v-card-title>
          <v-card-text>
            <p>
              {{ oneLawyer.description }}
            </p>
          </v-card-text>
        </v-card>
      </v-container>
    </div>


    <v-container class="d-flex justify-center">
      <v-card class="caso ma-5 rounded-lg w-25">
        <v-card-title class="justify-center">Casos Ganados</v-card-title>
        <v-container class="justify-center d-flex">
          <v-progress-circular  :value="100" bg-color="green-lighten-1" :size="250" :width="15"><h3>90%</h3></v-progress-circular>
        </v-container>
      </v-card>

      <v-card class="caso ma-5 rounded-lg w-25">
        <v-card-title class="justify-center">Casos Atendidos</v-card-title>
        <v-container class="justify-center d-flex">
          <v-progress-circular class="justify-center" :value="100" bg-color="orange-lighten-1" :size="250" :width="15"><h3>425</h3></v-progress-circular>
        </v-container>
      </v-card>
    </v-container>
    <v-card-actions class="justify-end mr-10 mb-2">
      <v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5">Contratar</v-btn>
    </v-card-actions>
  </div>


</template>

<script>
import {LawyersApiService} from "../services/lawyers-api.service";

export default {
  name: "my-lawyer",
  data() {
    return {
      oneLawyer: [],
      lawyerService: null
    }
  },
  created() {
    this.lawyerService = new LawyersApiService();
    this.lawyerService.getByIndex(this.$route.params.id).then(
        response => {
          this.oneLawyer = response.data
        })
  }
}
</script>

<style scoped>
h3 {
  font-size: 100px !important;
}
</style>