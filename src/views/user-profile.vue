<template>
  <v-container fluid>
    <v-row class="justify-center mt-16">
      <v-col cols="4" md="2">
        <h2 class="text-md-center mb-5">{{ oneProfile.fisrtName }} {{ oneProfile.lastName}}</h2>
        <v-img
            max-height="600"
            max-width="600"
            :src="oneProfile.urlImage"
        ></v-img>
      </v-col>
      <v-col cols="8" md="7">
        <p class="rounded-lg bg-white pa-4 ma-11">
          {{ oneProfile.description }}
        </p>
        <div class="text-md-center" v-if="this.$store.getters.getUser.id == this.$route.params.id">
          <router-link class="text-decoration-none" to="/edit-profile">
            <v-btn
                elevation="8"
                class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
            >
              <v-icon small>mdi-arrow-right-drop-circle</v-icon>
              Edit Profile
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {UserApiService} from "../services/user-api.service";

export default {
  name: "App-profile",
  data() {
    return {
      oneProfile: [],
      profiles: [],
      userService: null,
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
    this.userService = new UserApiService();
    this.userService.getByIndex(this.$route.params.id).then(
        response => {
          this.oneProfile = response.data
          if(response.data.length == 0 || (response.data.type == "lawyer")) {
            window.location.href = '/'
          }
        })
  },
  methods: {
  },
};
</script>

<style scoped></style>
