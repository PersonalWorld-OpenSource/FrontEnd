<template>
  <v-container class="d-flex">
    <v-container class="w-50 ma-0">

      <div>
        <v-container class="ma-0">
          <h2 class="text-center"> {{ oneCase.title }} <span class="text-green-lighten-1">{{ oneCase.state }}</span></h2>

          <v-card class="caso ma-5 rounded-lg">
            <v-card-title>
              <h5 class="bio">Consult Description</h5>
            </v-card-title>
            <v-card-text >
              <p>{{oneCase.description}}</p>
            </v-card-text>
          </v-card>
        </v-container>
      </div>
      <div v-if="this.$store.getters.getUser.type === 'client'">
        <v-container v-if="oneCase.lawyer != null" class="ma-0">
          <v-container class="d-flex justify-center">
            <h2 class="text-center mr-5"> My Lawyer</h2>
            <router-link class="text-decoration-none text-black lawyer-url" :to="`/lawyer/${oneCase.lawyer.id}`"><v-btn class="boton-caso rounded-0">Ver Perfil</v-btn></router-link>
          </v-container>
          <v-img :src="`${oneCase.lawyer.urlImage}`" max-height="400" max-width="400" class="rounded ma-auto mt-5" position="center"></v-img>
        </v-container>
      </div>

      <div v-else>
        <v-container v-if="oneCase.client != null" class="ma-0">
          <v-container class="d-flex justify-center">
            <h2 class="text-center mr-5"> My Client</h2>
            <router-link class="text-decoration-none text-black lawyer-url" :to="`/user/${oneCase.client.id}`"><v-btn class="boton-caso rounded-0">Ver Perfil</v-btn></router-link>
          </v-container>
          <v-img :src="`${oneCase.client.urlImage}`" max-height="400" max-width="400" class="rounded ma-auto mt-5" position="center"></v-img>
        </v-container>
      </div>


    </v-container>
    <v-container>
      <v-card class="caso ma-5 rounded-lg">
        <v-card-title>
          <h5 class="bio">Message</h5>
        </v-card-title>

        <v-container class="">
          <div v-if="messages.length != 0">
            <v-card v-for="message in messages" class="ma-3 pa-3">
              <p>{{message.consult.lawyer.fisrtName}}:{{message.messageToSend}}</p>
            </v-card>
          </div>
          <div class="d-flex mt-custom ">
            <v-textarea class="mr-5" bg-color="white" auto-grow  width="170" shaped rows="1" v-model="message"></v-textarea>
            <v-btn class="boton-caso rounded-0" @click="sendMessages">Send Message</v-btn>
          </div>
        </v-container>

      </v-card>

    </v-container>
  </v-container>

</template>

<script>
import {ConsultsApiService} from "../services/consults-api.service";
import {NotificationsApiService} from "../services/notifications-api.service";
import {MessageApiServiceApiService} from "../services/message-api.service";

export default {
  name: "my-case",
  data() {
    return {
      oneCase: [],
      caseService: null,
      notificationService: null,
      messages: [],
      message: "",
      sendMessage: [],
      messagesService: null
    }
  },
  created() {
    if(!this.$store.getters.inLogin) {
      window.location.href = '/'
    }
    this.caseService = new ConsultsApiService();
    this.messagesService = new MessageApiServiceApiService();

    this.caseService.getByIndex(this.$route.params.id).then(
        response => {
          this.oneCase = response.data

          if(this.$store.getters.getUser.type == "lawyer"){
            if(this.oneCase.lawyer.id != this.$store.getters.getUser.id)
              window.location.href = '/'
          } else {
            if(this.oneCase.client.id != this.$store.getters.getUser.id)
              window.location.href = '/'
          }
        })
    this.messagesService.getAllMessages(this.$route.params.id).then(response => {
      this.messages = response.data
    })
  },
  methods: {
    sendMessages() {
      this.notificationService = new NotificationsApiService();
      this.messages = {
        "messageToSend": this.message,
        "consultId": this.oneCase.id,
        "personId": this.$store.getters.getUser.id
      }
      this.messagesService.create(this.messages)
      if (this.$store.getters.getUser.type == "lawyer") {
        this.notificationService.create({
          "title": this.oneCase.title + " " + this.oneCase.state,
          "description": "Has recibido un nuevo mensaje en este caso!",
          "consultId": this.oneCase.id,
          "personId": this.oneCase.client.id
        })
      } else {
        this.notificationService.create({
          "title": this.oneCase.title + " " + this.oneCase.state,
          "description": "Has recibido un nuevo mensaje en este caso!",
          "consulId": this.oneCase.id,
          "personId": this.oneCase.lawyer.id

        })
      }
      this.message = ""

    }
  }
}
</script>

<style scoped>
.mt-custom {
  margin-top: 100px;
  width: 700px;
}
</style>