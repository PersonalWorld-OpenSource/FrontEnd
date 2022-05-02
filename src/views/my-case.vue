<template>
  <v-container class="d-flex">
    <v-container class="w-50 ma-0">

      <v-container class="ma-0">
        <h2 class="text-center"> Lorem Ipsum <span class="text-green-lighten-1">[Abierto]</span></h2>

        <v-card class="caso ma-5 rounded-lg">
          <v-card-title>
            <h5 class="bio">Descripcion del Caso</h5>
          </v-card-title>
          <v-card-text>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </v-card-text>
        </v-card>
      </v-container>

      <v-container class="ma-0">
        <v-container class="d-flex justify-center">
          <h2 class="text-center mr-5"> Mi Abogado</h2>
          <router-link class="text-decoration-none text-black" to="/miabogado"><v-btn class="boton-caso rounded-0">Ver Perfil</v-btn></router-link>
        </v-container>
        <v-img src="/../public/images/abogado.png" max-height="400" max-width="400" class="rounded ma-auto mt-5" position="center"></v-img>
      </v-container>
    </v-container>
    <v-container>
      <v-card class="caso ma-5 rounded-lg">
        <v-card-title>
          <h5 class="bio">Mensajeria</h5>
        </v-card-title>
        <v-container class="d-flex mt-custom ">
          <v-textarea class="mr-5" bg-color="white" auto-grow shaped rows="1"></v-textarea>
          <v-btn class="boton-caso rounded-0">Enviar Mensaje</v-btn>
        </v-container>

      </v-card>

    </v-container>
  </v-container>

</template>

<script>
export default {
  name: "MiCaso"
}
</script>

<style scoped>
.mt-custom {
  margin-top: 900px;
}
</style>