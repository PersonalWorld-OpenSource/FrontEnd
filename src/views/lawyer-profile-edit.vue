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

      <v-col cols="10" md="4">
        <v-form
          class="rounded-lg bg-white pa-4 ma-11"
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="won_cases"
            label="won cases"
            required
          ></v-text-field>
        </v-form>
        <div class="text-md-center">
          <v-btn
            class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
            elevation="8"
            @click="updateData()"
          >
            Change won cases
          </v-btn>
        </div>
      </v-col>

      <v-col cols="10" md="4">
        <v-form
          class="rounded-lg bg-white pa-4 ma-11"
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="total_cases"
            label="total cases"
            required
          ></v-text-field>
        </v-form>
        <div class="text-md-center">
          <v-btn
            class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
            elevation="8"
            @click="updateData()"
          >
            Change total cases
          </v-btn>
        </div>
      </v-col>

      <v-col cols="10" md="4">
        <v-form
          class="rounded-lg bg-white pa-4 ma-11"
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="lost_cases"
            label="lost cases"
            required
          ></v-text-field>
        </v-form>
        <div class="text-md-center">
          <v-btn
            class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
            elevation="8"
            @click="updateData()"
          >
            Change lost cases
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

import {LawyersApiService} from "../services/lawyers-api.service";

export default {
  name: "App-profile-setting",
  data() {
    return {
      lawyerService: new LawyersApiService(),
      lawyer: null,
      valid: true,
      itemData: {},
      description: "",
      lost_cases: "",
      total_cases: "",
      won_cases: "",
      url: "",
    };
  },
  created() {
    if(!this.$store.getters.inLogin) {
      window.location.href = '/'
    }

    this.lawyerService.getByIndex(this.$store.getters.getUser.id).then(response => {
      this.lawyer = response.data
      this.refreshList();
    })
  },
  methods: {
    refreshList() {
      this.id = this.lawyer.id
      this.name = this.lawyer.fisrtName + " " + this.lawyer.lastName
      this.description = this.lawyer.description
      this.url = this.lawyer.urlImage
      this.lost_cases = this.lawyer.lostCases
      this.won_cases = this.lawyer.wonCases
      this.total_cases = this.lawyer.totalCases
    },
    updateData() {
      this.itemData = {
        "fisrtName":  this.$store.getters.getUser.fisrtName,
        "lastName":  this.$store.getters.getUser.lastName,
        "email":  this.$store.getters.getUser.email,
        "description": this.description,
        "urlImage": this.url,
        "type": "lawyer",
        "wonCases": this.won_cases,
        "totalCases": this.total_cases,
        "lostCases": this.lost_cases
      }
      this.lawyerService.update(this.$store.getters.getUser.id, this.itemData )
    },
  },
};
</script>

<style scoped></style>
