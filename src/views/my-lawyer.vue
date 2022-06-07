<template>
  <div v-show="enableNewConsult" class="encima" style="background: rgba(0, 0, 0, 0.5);;">
    <div v class="p-8 bg-white vp-form">
      <h3>Create</h3>

      <div>
        <v-text-field
            color="blue-darken-3"
            variant="outlined"
            density="compact"
            bg-color="white"
            label="Title"
            v-model="consult.description"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
            color="blue-darken-3"
            variant="outlined"
            density="compact"
            bg-color="white"
            label="Description"
            v-model="consult.title"
        ></v-text-field>
      </div>
      <v-btn density="comfortable" color="#1C58AE" class="text-white d-flex justify-center" @click="createConsult">
        Create Consult
      </v-btn>
    </div>
  </div>

  <div>
    <div class="d-flex justify-center mt-16">
      <v-container class="">
        <h2 class="text-center">{{ oneLawyer.name }}</h2>
        <v-img :src="`${oneLawyer.url}`" max-height="400" max-width="400" class="rounded ma-auto mt-5" position="center"></v-img>
      </v-container>
      <v-container>
        <v-card class="caso ma-5 rounded-lg">
          <v-card-title >
            <h5 class="bio">Biography</h5>
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
        <v-card-title class="justify-center">Won Cases</v-card-title>
        <v-container class="justify-center d-flex">
          <v-progress-circular  :value="100" bg-color="green-lighten-1" :size="250" :width="15"><h3>90%</h3></v-progress-circular>
        </v-container>
      </v-card>

      <v-card class="caso ma-5 rounded-lg w-25">
        <v-card-title class="justify-center">Cases Handled</v-card-title>
        <v-container class="justify-center d-flex">
          <v-progress-circular class="justify-center" :value="100" bg-color="orange-lighten-1" :size="250" :width="15"><h3>425</h3></v-progress-circular>
        </v-container>
      </v-card>
    </v-container>
    <v-card-actions class="justify-end mr-10 mb-2">
      <v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5" @click="showConsult">New Consult</v-btn>
    </v-card-actions>
  </div>


</template>

<script>
import {LawyersApiService} from "../services/lawyers-api.service";
import {CasesApiService} from "../services/cases-api.service";

export default {
  name: "my-lawyer",
  data() {
    return {
      oneLawyer: [],
      lawyerService: null,
      enableNewConsult: false,
      consultService : null,
      consult: [
        {
          "title": "",
          "condition": "",
          "description": "",
          "caseDescriptions": "",
          "client": null,
          "lawyer": null
        }
      ]
    }
  },
  created() {
    if(!this.$store.getters.inLogin) {
      window.location.href = '/'
    }
    this.lawyerService = new LawyersApiService();
    this.lawyerService.getByIndex(this.$route.params.id).then(
        response => {
          this.oneLawyer = response.data
        })
  },
  methods: {
    showConsult() {
      this.enableNewConsult = !this.enableNewConsult;
    },
    createConsult() {
      this.consultService = new CasesApiService();

      this.consultService.create(
          {
            "title": this.consult.title,
            "condition": "[OPEN]",
            "caseDescription": this.consult.description,
            "client": this.$store.getters.getUser.id,
            "lawyer": this.oneLawyer.id
          }
      ).then(window.location.href = '/myconsults')

    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 100px !important;
}
.encima {
  display: inline-block;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
.vp-form {
  border-radius: 10px;
  border: 1px solid #7c7c;
  padding: 2rem;
}
</style>