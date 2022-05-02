<template>
  <div class="pt-2 d-flex">
      <div class="w-50 mr-lg-10">
        <h2 class="text-center">Mis Casos</h2>
        <v-card class="caso ma-5 rounded-lg">
          <v-card-title >
            <h3>Lorem Ipsum <span class="text-green-lighten-1">[Abierto]</span></h3>
          </v-card-title>
          <v-card-text>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500 dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              eversince the 1500 dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500.</p>
          </v-card-text>
          <v-card-actions class="justify-end mr-10 mb-2">
            <router-link class="text-decoration-none text-black" to="/micaso"><v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5">Ver caso</v-btn></router-link>
          </v-card-actions>
        </v-card>

        <v-card class="caso ma-5 rounded-lg">
          <v-card-title>
            <h3>Lorem Ipsum <span class="text-red-lighten-1">[Cerrado]</span></h3>
          </v-card-title>
          <v-card-text>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500 dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              eversince the 1500 dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500.</p>
          </v-card-text>
          <v-card-actions class="justify-end mr-10 mb-2">
            <router-link class="text-decoration-none text-black" to="/micaso"><v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5">Ver caso</v-btn></router-link>
          </v-card-actions>
        </v-card>

        <v-card class="caso ma-5 rounded-lg">
          <v-card-title >
            <h3>Lorem Ipsum <span class="text-green-lighten-1">[Abierto]</span></h3>
          </v-card-title>
          <v-card-text>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500 dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              eversince the 1500 dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500.</p>
          </v-card-text>
          <v-card-actions class="justify-end mr-10 mb-2">
            <router-link class="text-decoration-none text-black" to="/micaso"><v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5">Ver caso</v-btn></router-link>
          </v-card-actions>
        </v-card>
      </div>

      <div class="w-50 ml-lg-10">
        <h2 class="text-center">Mi Abogado</h2>
        <v-img src="/../public/images/abogado.png" max-height="400" max-width="400" class="rounded ma-auto mt-5" position="center"></v-img>
        <v-container class="w-100 d-flex justify-center">
          <router-link class="text-decoration-none text-black" to="/miabogado"><v-btn class="boton-caso pgb-white rounded-0 pl-7 pr-7 pt-5 pb-5 justify-center">Ver Perfil</v-btn></router-link>
        </v-container>

        <h2 class="text-center">Notificaciones</h2>
        <v-card class="caso ma-5 rounded-lg">
          <v-card-title >
            <h3>Lorem Ipsum</h3>
          </v-card-title>
          <v-card-text>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500 dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince
              the 1500 dummy text of the printing and typesetting industry.</p>
          </v-card-text>
        </v-card>

        <v-card class="caso ma-5 rounded-lg">
          <v-card-title >
            <h3>Lorem Ipsum</h3>
          </v-card-title>
          <v-card-text>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500 dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince
              the 1500 dummy text of the printing and typesetting industry.</p>
          </v-card-text>
        </v-card>
      </div>
  </div>
</template>

<script>
export default {
  name: 'main',

  data: () => ({

  })
}
</script>
<style>
  .caso {
    border: 1px solid #CECECE !important;
    box-shadow: none !important;
  }
  .boton-caso {
    border: 1px solid #BDBDBD !important;
    background-color: #E9E9E9 !important;
  }
  .pgb-white {
    background-color: white !important;
  }
</style>