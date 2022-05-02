<template>
  <v-toolbar  app class="bg-indigo-darken-3">
    <v-app-bar-nav-icon @click.stop="barra = !barra"></v-app-bar-nav-icon>

    <router-link class="text-decoration-none text-white" to="/"><v-toolbar-title>PersonalWorld</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
    <router-link class="text-decoration-none text-white" to="/perfil"><v-btn>Mi Perfil</v-btn></router-link>
  </v-toolbar>

  <v-navigation-drawer v-model="barra" class="bg-indigo-darken-3" >
    <v-list temporary class="d-flex justify-center items pa-0 bg-indigo-darken-3">
      <v-list-item-group v-model="barra_grupo" class="bg-indigo-darken-3 pt-16">
        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/notificaciones"><v-btn class="bg-indigo-darken-3">Notificaciones</v-btn></router-link></v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/encontrar-abogado"><v-btn class="bg-indigo-darken-3">Encontrar Abogado</v-btn></router-link></v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/subscripcion"><v-btn class="bg-transparent">Subscripcion</v-btn></router-link></v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/miscasos"><v-btn class="bg-indigo-darken-3">Mis Casos</v-btn></router-link></v-list-item-title>
        </v-list-item >

        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/cerrarsession"><v-btn class="bg-indigo-darken-3">Cerrar Cesion</v-btn></router-link></v-list-item-title>
        </v-list-item >
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "header",
  data: () => ({
  barra: false,
  barra_grupo: null,
  }),
}
</script>

<style scoped>

</style>