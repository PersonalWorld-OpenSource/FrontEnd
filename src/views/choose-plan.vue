<template>
  <h1 class="text-center mt-3">Choose Plan</h1>
  <div class="container d-flex align-center mt-16">
      <v-card width="300" class="ma-auto" v-for="item in plans">
        <h2 class="text-center text-blue-darken-2 mt-2" >{{item.name}}</h2>
        <v-card-text>
          <p>{{item.description}}</p>
          <br>
          <p>{{item.price}}</p>
          <router-link class="text-decoration-none text-white" to="/pagar"><v-btn flat color="#1C58AE" class="button text-white mt-5 mb-5 ml-auto mr-auto">
            Pay
          </v-btn></router-link>
        </v-card-text>
      </v-card>
  </div>
</template>

<script>

import {PlansApiService} from "../services/plans-api.service";

export default {
  name: "choose-plan",
  data(){
    return{
      plans:[],
      plansService:null
    };
  },
  created(){
    if((!this.$store.getters.inLogin) || (this.$store.getters.getUser.type !== 'lawyer')) {
      window.location.href = '/'
    }

    this.plansService=new PlansApiService();
    this.plansService.getAllPlans().then((response) =>{
      this.plans = response.data;
    });
    console.log(this.plans);
  }
}
</script>

<style scoped>

.button{
  display: flex;
}
</style>