<template>
  <v-container fluid>
    <v-row class="justify-center mt-16">
      <v-col cols="4" md="2">
        <h2 class="text-md-center mb-5">{{ name }}</h2>
        <v-img
          max-height="600"
          max-width="600"
          src="images/profilePicture.png"
        ></v-img>
      </v-col>
      <v-col cols="8" md="7">
        <p class="rounded-lg bg-white pa-4 ma-11">
          {{ description }}
        </p>
        <div class="text-md-center">
          <router-link class="text-decoration-none" to="/editar-perfil">
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
import { ProfilesApiService } from "../services/profile-api.service";

export default {
  name: "App-profile",
  data() {
    return {
      oneProfile: [],
      profiles: [],
      profileService: new ProfilesApiService(),
      id: "",
      name: "",
      description: "",
    };
  },
  created() {
    this.refreshList();
  },
  methods: {
    refreshList() {
      this.profileService.getById(1).then((response) => {
        this.id = response.data.id;
        this.name = response.data.name;
        this.description = response.data.description;
      });
    },
  },
};
</script>

<style scoped></style>
