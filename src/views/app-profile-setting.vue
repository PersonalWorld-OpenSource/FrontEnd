<template>
  <v-container fluid class="fill-height">
    <v-row class="justify-center mt-16">
      <v-col cols="4" md="2">
        <h2 class="text-md-center mb-5">{{ name }}</h2>
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
        <div class="text-md-center mt-3">
          <v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5" @click="updateData()">
            Change Image
          </v-btn>
        </div>
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
            Change Description
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
import { ProfilesApiService } from "../services/profile-api.service";

export default {
  name: "App-profile-setting",
  data() {
    return {
      profileService: new ProfilesApiService(),
      valid: true,
      itemData: {},
      id: "",
      name: "",
      description: "",
      url: "",
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
        this.url = response.data.url;
      });
    },
    updateData() {
      this.itemData = {
        name: this.name,
        url: this.url,
        description: this.description,
      };
      this.profileService.update(this.id, this.itemData);
    },
  },
};
</script>

<style scoped></style>
