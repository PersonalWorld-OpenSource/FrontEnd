<template>
  <h3 class="text-center pa-2">Find Lawyer</h3>
  <v-card class="mx-auto mt-5 py-3 elevation-6" width="800">
    <v-form class="px-5">
      <div class="d-flex">
        <div class="mt-5 font-weight-bold">Age</div>
        <div class="ml-10"></div>
        <v-combobox
          v-model="ageselect"
          label="Intervalo de Edad"
          :items="AgeRange"
          clearable
          outlined
          color="blue"
          class="ml-16 font-weight-light"
        ></v-combobox>
      </div>
      <div class="d-flex">
        <div class="mt-5 font-weight-bold">Experience</div>
        <v-combobox
          v-model="experienceselect"
          label="Intervalo de Experiencia"
          :items="ExperienceRange"
          clearable
          outlined
          color="blue"
          class="ml-15 font-weight-light"
        ></v-combobox>
      </div>
      <div class="d-flex">
        <div class="mt-5 font-weight-bold">Specialties</div>
        <v-combobox
          v-model="skillselect"
          label="Escoger especialidad del abogado"
          :items="SkillsList"
          clearable
          outlined
          color="blue"
          class="ml-13 font-weight-light"
        ></v-combobox>
      </div>
      <div class="d-flex">
        <div class="mt-5 font-weight-bold">Successful Cases</div>
        <v-combobox
          v-model="woncaseselect"
          label="Intervalo de casos ganados"
          :items="WonCasesRange"
          clearable
          outlined
          color="blue"
          class="ml-8 font-weight-light"
        ></v-combobox>
      </div>
      <div class="d-flex">
        <div class="mt-5 font-weight-bold">All Cases</div>
        <v-combobox
          v-model="cateredcaseselect"
          label="Intervalo de casos atendidos"
          :items="CateredCasesRange"
          clearable
          outlined
          color="blue"
          class="ml-5 font-weight-light"
        ></v-combobox>
      </div>
      <v-container class="d-flex justify-center">
        <router-link
          class="text-decoration-none text-black"
          to="/lista-abogados"
        >
          <v-btn color="#1C58AE" class="text-white"> Search </v-btn>
        </router-link>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "SearchLaywer",

  data() {
    return {
      ageselect: [""],
      experienceselect: [""],
      skillselect: [""],
      woncaseselect: [""],
      cateredcaseselect: [""],
      AgeRange: ["20 a 30", "31 a 40", "41 a 50", "51 a 60"],
      ExperienceRange: ["5 a 10", "11 a 20", "21 a 30", "31 a 40"],
      SkillsList: [
        "Derecho Civil",
        "Derecho Familiar",
        "Derecho Mercantil",
        "Derecho Penal",
      ],
      WonCasesRange: ["10 a 20", "21 a 30", "31 a 40", "41 a 50"],
      CateredCasesRange: ["10 a 30", "31 a 50", "51 a 70", "71 a 90"],
    };
  },
};
</script>

<style scoped></style>
