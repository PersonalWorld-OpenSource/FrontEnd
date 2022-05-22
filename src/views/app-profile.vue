<template>
  <v-container fluid>
    <v-row
      class="justify-center mt-16"
      v-for="(oneProfile, index) in profiles.splice(0, 1)"
      :key="index"
    >
      <v-col cols="4" md="2">
        <h2 class="text-md-center mb-5">{{ oneProfile.name }}</h2>
        <v-img
          max-height="600"
          max-width="600"
          src="images/profilePicture.png"
        ></v-img>
      </v-col>
      <v-col cols="8" md="7">
        <p class="rounded-lg bg-white pa-4 ma-11">
          {{ oneProfile.description }}
        </p>
        <div class="text-md-center">
          <router-link class="text-decoration-none" to="/editar-perfil">
            <v-btn
              elevation="8"
              class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
            >
              <v-icon small>mdi-arrow-right-drop-circle</v-icon>
              Editar Perfil
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
      profileService: null,
    };
  },
  created() {
    this.profilesService = new ProfilesApiService();
    this.profilesService.getAllProfiles().then((response) => {
      this.profiles = response.data;
    });
    console.log(this.profiles);
  },
  methods: {},
};
</script>

<style scoped></style>
