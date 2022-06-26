<template>
  <div v-if="personPlan.length != 0" class="container d-flex align-center mt-16">
    <v-card-text>
      <p class="text-center text-blue-darken-2">¡Ya cuentas con un plan activo!</p>
      <router-link class="text-decoration-none text-white" :to="`/`"><v-btn flat color="#1C58AE" class="button text-white mt-5 mb-5 ml-auto mr-auto">
        Regresar
      </v-btn></router-link>
    </v-card-text>
  </div>

  <div v-else>
    <h1 class="text-center mt-3">Choose Plan</h1>
    <div class="container d-flex align-center mt-16">
      <v-card width="300" class="ma-auto" v-for="item in plans">
        <h2 class="text-center text-blue-darken-2 mt-2" >{{item.name}}</h2>
        <v-card-text>
          <p>{{item.description}}</p>
          <br>
          <p class="text-center text-blue-darken-2">${{item.price}}</p>
          <router-link class="text-decoration-none text-white" :to="`/buy/${item.id}`"><v-btn flat color="#1C58AE" class="button text-white mt-5 mb-5 ml-auto mr-auto">
            Pay
          </v-btn></router-link>
        </v-card-text>
      </v-card>
    </div>
  </div>

</template>

<script>

import {PlansApiService} from "../services/plans-api.service";
import {PersonPlanApiService} from "../services/personplan-api.service";

export default {
  name: "choose-plan",
  data(){
    return{
      plans:[],
      plansService:null,
      personPlan: [],
      personPlanService: null
    };
  },
  created(){
    if((!this.$store.getters.inLogin) || (this.$store.getters.getUser.type !== 'lawyer')) {
      window.location.href = '/'
    }
    this.personPlanService = new PersonPlanApiService().getLastByPersonId(this.$store.getters.getUser.id).then(response => {
      this.personPlan = response.data
    })


    this.plansService=new PlansApiService();

    this.plansService.getAllPlans().then((response) =>{
      this.plans = response.data;
    });
  }
}
</script>

<style scoped>

.button{
  display: flex;
}
</style>