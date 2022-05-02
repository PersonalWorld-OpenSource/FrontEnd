<template >

  <h2 class="text-center mt-3 ">Pagar Suscripcion</h2>
  <v-card class="mx-auto mt-5 py-2"  width="400">
    <v-form class="px-3">
      <v-text-field label="Numero Tarjeta"></v-text-field>
      <v-text-field label="Fecha Expiracion"></v-text-field>
      <v-text-field label="CVV"></v-text-field>
      <v-text-field label="Titular"></v-text-field>
      <v-btn flat color="#1C58AE" class="text-white" @click="successful">
        Pagar
      </v-btn>
    </v-form>

  </v-card>
</template>

<script>

export default {
  name: "pay-subscription",

  methods:{
    successful(){
      alert("Pago exitoso");
    }
  }

}
</script>

<style scoped>

</style>