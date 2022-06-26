<template>

  <v-card class="mx-auto  pd" width="500">
    <v-container class="mb-4">
      <h2 class="text-center mt-3">Login</h2>
    </v-container>
    <v-form class="px-3 ml-15 mr-15">
      <v-text-field
          color="blue-darken-3"
          variant="outlined"
          density="compact"
          bg-color="white"
          label="Email"
          v-model="email"
      ></v-text-field>
      <v-text-field
          color="blue-darken-3"
          variant="outlined"
          density="compact"
          label="Password"
          bg-color="white"
          type="password"
          v-model="password"
      ></v-text-field>
      <v-container class="d-flex justify-center mb-5">
        <v-row>
          <router-link to="/register">
            <v-btn
                density="comfortable"
                variant="text"
                class="text-blue-darken-3 ml-n3 "
            >Register instead</v-btn
            ></router-link>
          <v-btn density="comfortable" color="#1C58AE" class="text-white ml-16 pd-s" @click="pressLogin">
            Login
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import {UserApiService} from "../services/user-api.service";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      isLogin: false,
      account: [],
      userService: null,
    }
  },
  created() {
    if(this.$store.getters.inLogin) {
      window.location.href = '/'
    }
    this.userService = new UserApiService();
  },
  methods: {
    pressLogin() {
      this.userService.loginUser({
        "email": this.email,
        "password": this.password
      }).then(
          response => {
            if(response.data.length != 0) {
              console.log(response.data)
              this.account = response.data
              this.$store.state.changeUser = response.data
              this.$store.dispatch('changeUser')

              this.$store.state.changeInLogin = !this.$store.getters.inLogin
              this.$store.dispatch('changeLogin')


              window.location.href = '/'
            }
          }
      )

    }
  }
};
</script>

<style scoped>
.pd {
  margin: 13rem 0;
  padding: 2rem 0;
}
.pd-s {
  padding: 1rem !important;
}
</style>
