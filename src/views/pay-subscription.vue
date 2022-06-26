<template >

  <h2 class="text-center mt-3 ">Pay Subscription</h2>
  <v-card class="mx-auto mt-5 py-2"  width="400">
    <div class="container d-flex align-center mt-16 mb-16">
      <v-card width="300" class="ma-auto">
        <h2 class="text-center text-blue-darken-2 mt-2" >{{plan.name}}</h2>
        <v-card-text>
          <p>{{plan.description}}</p>
          <br>
          <p class="text-center text-blue-darken-2">${{plan.price}}</p>
        </v-card-text>
      </v-card>
    </div>
    <v-form class="px-3">
      <v-text-field label="Card Number"></v-text-field>
      <v-text-field label="Expiration Date"></v-text-field>
      <v-text-field label="CVV"></v-text-field>
      <v-text-field label="Cardholder"></v-text-field>
      <v-btn flat color="#1C58AE" class="button text-white mr-auto ml-auto" @click="successful">
        Pay
      </v-btn>
    </v-form>

  </v-card>
</template>

<script>

import {PlansApiService} from "../services/plans-api.service";
import {PersonPlanApiService} from "../services/personplan-api.service";

export default {
  name: "pay-subscription",
  data(){
    return{
      plan:[],
      planService:null,
      personPlanService: null,
      personPlan: []
    };
  },
  created() {
    if((!this.$store.getters.inLogin) || (this.$store.getters.getUser.type !== 'lawyer')) {
      window.location.href = '/'
    }
    this.planService = new PlansApiService().getById(this.$route.params.id)
        .then(response => {
          this.plan = response.data
        })
  },
  methods:{
    successful(){
      this.personPlan = {
        "date": "2022-11-26T21:13:18.265Z",
        "personId": this.$store.getters.getUser.id+"",
        "planId": this.plan.id+""
      }
      this.personPlanService = new PersonPlanApiService().create(this.personPlan).then( () => {
        alert("Pago exitoso")
          window.location.href = '/'
      })

    },
  }

}
</script>

<style scoped>
.button{
  display:flex
}
</style>