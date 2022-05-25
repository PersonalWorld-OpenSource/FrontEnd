<template>
  <v-card className="mx-auto mt-5 py-2" width="400">
    <v-container className="mb-4">
      <h2 className="text-center mt-3">Log In</h2>
    </v-container>
    <v-form className="px-3 ml-10 mr-10">
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
      <v-btn
          variant="text"
          className="v-card-text text-blue-darken-3 mt-n14 ml-n4"
          density="comfortable"
      >Forgot password?
      </v-btn
      >
      <v-container className="d-flex justify-center mb-5">
        <v-row>
          <v-btn
              density="comfortable"
              variant="text"
              className="text-blue-darken-3 ml-n5"
          >Create account
          </v-btn
          >
          <v-btn density="comfortable" color="#1C58AE" className="text-white pa-md-4 ml-14" @click="pressLogin">
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
      accountService: null
    }
  },
  created() {
    if(this.$store.getters.inLogin) {
      window.location.href = '/'
    }
    this.accountService = new UserApiService();
  },
  methods: {
    pressLogin() {
      this.accountService.findAccount(this.email,this.password).then(
          response => {
            if(response.data.length != 0) {
              this.account = response.data
              this.$store.state.changeUser = response.data[0]
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

<style scoped></style>
