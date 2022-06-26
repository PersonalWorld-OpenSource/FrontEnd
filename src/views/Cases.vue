<template>
  <div class="d-flex flex-column ma-auto mt-7">
    <h2 class="text-center">My Consults</h2>
    <div>
      <v-card
        v-for="(oneCase, index) in cases"
        :key="index"
        class="caso ma-5 rounded-lg"
      >
        <v-card-title>
          <h3>
            {{ oneCase.title
            }}<span class="text-green-lighten-1">{{ oneCase.status }}</span>
          </h3>
        </v-card-title>
        <v-card-text>
          <p>
            {{ oneCase.description }}
          </p>
        </v-card-text>
        <v-card-actions class="justify-end mr-10 mb-2">
          <router-link
            class="text-decoration-none text-black"
            :to="`/consult/${oneCase.id}`"
            ><v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
              >View Consult</v-btn
            ></router-link
          >
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { ConsultsApiService } from "../services/consults-api.service";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "cases",
  data() {
    return {
      cases: [],
      casesService: null,
    };
  },
  created() {
    if(!this.$store.getters.inLogin) {
      window.location.href = '/'
    }
    this.casesService = new ConsultsApiService();
    this.casesService.getAllCases(this.$store.getters.getUser.type, this.$store.getters.getUser.id).then((response) => {
      this.cases = response.data;
    });
  },
};
</script>

<style scoped></style>
