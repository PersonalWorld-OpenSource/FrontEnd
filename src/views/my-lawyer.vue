<template>
  <div>
    <div class="d-flex justify-center mt-16">
      <v-container class="">
        <h2 class="text-center">Fernando De La Cruz</h2>
        <v-img src="/../public/images/abogado.png" max-height="400" max-width="400" class="rounded ma-auto mt-5" position="center"></v-img>
      </v-container>
      <v-container>
        <v-card class="caso ma-5 rounded-lg">
          <v-card-title >
            <h5 class="bio">Biografia</h5>
          </v-card-title>
          <v-card-text>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 en-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </v-card-text>
        </v-card>
      </v-container>
    </div>


    <v-container class="d-flex justify-center">
      <v-card class="caso ma-5 rounded-lg w-25">
        <v-card-title class="justify-center">Casos Ganados</v-card-title>
        <v-container class="justify-center d-flex">
          <v-progress-circular  :value="100" bg-color="green-lighten-1" :size="250" :width="15"><h3>90%</h3></v-progress-circular>
        </v-container>
      </v-card>

      <v-card class="caso ma-5 rounded-lg w-25">
        <v-card-title class="justify-center">Casos Atendidos</v-card-title>
        <v-container class="justify-center d-flex">
          <v-progress-circular class="justify-center" :value="100" bg-color="orange-lighten-1" :size="250" :width="15"><h3>425</h3></v-progress-circular>
        </v-container>
      </v-card>
    </v-container>
    <v-card-actions class="justify-end mr-10 mb-2">
      <v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5">Contratar</v-btn>
    </v-card-actions>
  </div>


</template>

<script>
export default {
  name: "my-lawyer"
}
</script>

<style scoped>
   h3 {
    font-size: 100px !important;
  }
</style>