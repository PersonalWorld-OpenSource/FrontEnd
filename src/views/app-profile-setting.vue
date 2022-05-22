<template>
  <v-container fluid class="fill-height">
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
        <div class="text-md-center mt-3">
          <v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5">
            Cambiar Imagen
          </v-btn>
        </div>
      </v-col>
      <v-col cols="8" md="7">
        <p class="rounded-lg bg-white pa-4 ma-11">
          {{ oneProfile.description }}
        </p>
        <div class="text-md-center">
          <v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5" elevation="8">
            Cambiar Descripcion
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-container>
      <div class="text-right mt-16 pt-12">
        <v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5" elevation="8">
          <v-icon small>mdi-arrow-right-drop-circle</v-icon>
          Guardar Cambios
        </v-btn>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import { ProfilesApiService } from "../services/profile-api.service";

export default {
  name: "App-profile-setting",
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
