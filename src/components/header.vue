<template>
  <v-toolbar v-if="this.$store.getters.inLogin" app class="bg-indigo-darken-3">
    <v-app-bar-nav-icon @click="barra = !barra"></v-app-bar-nav-icon>
    <router-link class="text-decoration-none text-white" to="/"><v-toolbar-title>PersonalWorld</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
    <router-link class="text-decoration-none text-white" to="/profile"><v-btn>Profile</v-btn></router-link>
  </v-toolbar>

  <v-toolbar  v-else app class="bg-indigo-darken-3">
    <router-link class="text-decoration-none text-white" to="/"><v-btn>PersonalWorld</v-btn></router-link>
    <v-spacer></v-spacer>
    <router-link class="text-decoration-none text-white" to="/login"><v-btn>Login</v-btn></router-link>
    <router-link class="text-decoration-none text-white" to="/register"><v-btn>Register</v-btn></router-link>
  </v-toolbar>

  <v-navigation-drawer v-model="barra" class="bg-indigo-darken-3" >
    <v-list temporary class="d-flex justify-center items pa-0 bg-indigo-darken-3">
      <v-list-item-group v-model="barra_grupo" class="bg-indigo-darken-3 pt-16">
        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/notifications" @click=" barra  = !barra"><v-btn class="bg-indigo-darken-3">Notifications</v-btn></router-link></v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/find-lawyer" @click=" barra  = !barra"><v-btn class="bg-indigo-darken-3">Find Lawyer</v-btn></router-link></v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/subscription" @click=" barra  = !barra"><v-btn class="bg-transparent">Subscription</v-btn></router-link></v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/myconsults" @click=" barra  = !barra"><v-btn class="bg-indigo-darken-3">My Consults</v-btn></router-link></v-list-item-title>
        </v-list-item >

        <v-list-item>
          <v-list-item-title><router-link class="text-decoration-none text-white" to="/cerrarsession" @click="closeSession"><v-btn class="bg-indigo-darken-3">Log Out</v-btn></router-link></v-list-item-title>
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
  methods: {
    closeSession() {
      this.$store.state.changeInLogin = !this.$store.getters.inLogin
      this.$store.dispatch('changeLogin')

      this.$store.state.changeUser = []
      this.$store.dispatch('changeUser')
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>

</style>