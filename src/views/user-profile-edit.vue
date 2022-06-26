<template>
  <v-container fluid class="fill-height">
    <v-row class="justify-center mt-16">
      <v-col cols="4" md="2">
        <h2 class="text-md-center mb-5">{{ this.$store.getters.getUser.fisrtName }} {{ this.$store.getters.getUser.lastName }}</h2>
        <v-img
            max-height="600"
            max-width="600"
            :src="url"
        ></v-img>
        <v-form
            class="rounded-lg bg-white pa-4 ma-11"
            ref="form"
            v-model="valid"
        >
          <v-text-field
              v-model="url"
              label="url"
              required
          ></v-text-field>
        </v-form>
      </v-col>
      <v-col cols="8" md="7">
        <v-form
            class="rounded-lg bg-white pa-4 ma-11"
            ref="form"
            v-model="valid"
        >
          <v-text-field
              v-model="description"
              label="description"
              required
          ></v-text-field>
        </v-form>
        <div class="text-md-center">
          <v-btn
              class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
              elevation="8"
              @click="updateData()"
          >
            Change Information
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-container>
      <div class="text-right mt-16 pt-12">
        <router-link to="/perfil">
          <v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5" elevation="8">
            <v-icon small>mdi-arrow-right-drop-circle</v-icon>
            Return
          </v-btn>
        </router-link>
      </div>
    </v-container>
  </v-container>
</template>

<script>

import {UserApiService} from "../services/user-api.service";

export default {
  name: "App-profile-setting",
  data() {
    return {
      userService: new UserApiService(),
      valid: true,
      itemData: {},
      id: "",
      name: "",
      description: "",
      url: "",
    };
  },
  created() {
    if(!this.$store.getters.inLogin) {
      window.location.href = '/'
    }
    this.refreshList();
  },
  methods: {
    refreshList() {
      this.id =this.$store.getters.getUser.id
      this.name =
      this.description = this.$store.getters.getUser.description
      this.url = this.$store.getters.getUser.urlImage
    },
    updateData() {
      this.itemData = {
        "fisrtName": this.$store.getters.getUser.fisrtName,
        "lastName": this.$store.getters.getUser.lastName,
        "email": this.$store.getters.getUser.email,
        "description": this.description,
        "urlImage": this.url,
        "type": "client"
      }
      this.userService.update(this.$store.getters.getUser.id, this.itemData)
    },
  },
};
</script>

<style scoped></style>
