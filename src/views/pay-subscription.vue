<template >

  <h2 class="text-center mt-3 ">Pay Subscription</h2>
  <v-card class="mx-auto mt-5 py-2"  width="400">
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

export default {
  name: "pay-subscription",
  created() {
    if(!this.$store.getters.inLogin) {
      window.location.href = '/'
    }
  },
  methods:{
    successful(){
      alert("Pago exitoso");
    }
  }

}
</script>

<style scoped>
.button{
  display:flex
}
</style>