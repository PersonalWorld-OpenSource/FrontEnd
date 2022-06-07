<template>
  <v-container class="d-flex">
    <v-container class="w-50 ma-0">

      <div>
        <v-container class="ma-0">
          <h2 class="text-center"> {{ oneCase.title }}<span class="text-green-lighten-1">{{ oneCase.condition }}</span></h2>

          <v-card class="caso ma-5 rounded-lg">
            <v-card-title>
              <h5 class="bio">Consult Description</h5>
            </v-card-title>
            <v-card-text>
              <p>{{oneCase.caseDescription}}</p>
            </v-card-text>
          </v-card>
        </v-container>
      </div>

      <v-container class="ma-0">
        <v-container class="d-flex justify-center">
          <h2 class="text-center mr-5"> My Lawyer</h2>
          <router-link class="text-decoration-none text-black" to="/lawyer/2"><v-btn class="boton-caso rounded-0">Ver Perfil</v-btn></router-link>
        </v-container>
        <v-img src="https://img.lalr.co/cms/2017/10/06191633/abogado.jpg?size=xl" max-height="400" max-width="400" class="rounded ma-auto mt-5" position="center"></v-img>
      </v-container>
    </v-container>
    <v-container>
      <v-card class="caso ma-5 rounded-lg">
        <v-card-title>
          <h5 class="bio">Message</h5>
        </v-card-title>
        <v-container class="d-flex mt-custom ">
          <v-textarea class="mr-5" bg-color="white" auto-grow shaped rows="1" v-model="message"></v-textarea>
          <v-btn class="boton-caso rounded-0" @click="sendMessage">Send Message</v-btn>
        </v-container>

      </v-card>

    </v-container>
  </v-container>

</template>

<script>
import {CasesApiService} from "../services/cases-api.service";
import {NotificationsApiService} from "../services/notifications-api.service";
import {LawyersApiService} from "../services/lawyers-api.service";

export default {
  name: "my-case",
  data() {
    return {
      oneCase: [],
      caseService: null,
      lawyer: null,
      lawyerService: null,
      notificationService: null
    }
  },
  created() {
    if(!this.$store.getters.inLogin) {
      window.location.href = '/'
    }
    this.caseService = new CasesApiService();
    this.lawyerService = new LawyersApiService();
    this.caseService.getByIndex(this.$route.params.id).then(
        response => {
          this.oneCase = response.data
          if(this.$store.getters.getUser.type == "lawyer"){
            if(this.oneCase.lawyer != this.$store.getters.getUser.id)
              window.location.href = '/'
          } else {
            if(this.oneCase.client != this.$store.getters.getUser.id)
              window.location.href = '/'
          }
          this.lawyerService.getByIndex(this.oneCase.lawyer).then(response => {
            this.lawyer = response.data;
            console.log(response.data)
          })
        })
  },
  methods: {
    sendMessage() {
      this.notificationService = new NotificationsApiService();

      if(this.$store.getters.getUser.type == "lawyer"){
          this.notificationService.create({
            "casesId": this.oneCase.id,
            "personId": this.oneCase.client,
            "title": this.oneCase.title,
            "description": "Has recibido un nuevo mensaje en este caso!"
          })
      } else {
          this.notificationService.create({
            "casesId": this.oneCase.id,
            "personId": this.oneCase.lawyer,
            "title": this.oneCase.title,
            "description": "Has recibido un nuevo mensaje en este caso!"
          })
      }


    }
  }
}
</script>

<style scoped>
.mt-custom {
  margin-top: 900px;
}
</style>