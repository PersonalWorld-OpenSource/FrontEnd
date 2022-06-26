<template>
  <v-card class="mx-auto  pd" width="500">
    <v-container class="mb-4">
      <h2 class="text-center mt-3">Register</h2>
    </v-container>
    <v-form class="px-3 ml-15 mr-15">
      <v-row>
        <v-text-field
            color="blue-darken-3"
            variant="outlined"
            density="compact"
            label="First Name"
            class="mr-3"
            v-model="name"
        ></v-text-field>
        <v-text-field
            color="blue-darken-3"
            variant="outlined"
            density="compact"
            label="Last Name"
            class="ml-3"
            v-model="last"
        ></v-text-field>
      </v-row>
      <v-text-field
          color="blue-darken-3"
          variant="outlined"
          density="compact"
          label="Email"
          class="ml-n3 mr-n3"
          v-model="email"
      ></v-text-field>
      <v-card-text
          variant="text"
          class="v-card-text text-blue-darken-3 mt-n12 ml-n7 mb-4"
          density="comfortable"
      >You can use letters & numbers</v-card-text
      >
      <v-container class="ml-n9 mt-n5 mb-n9">
        <h5 class="ml-2">What type of user are you?</h5>
        <v-radio-group v-model="type" inline>
          <v-radio label="Lawyer" value="lawyer"></v-radio>
          <v-radio label="Client" value="client"></v-radio>
        </v-radio-group>
      </v-container>
      <v-row>
        <v-text-field
            color="blue-darken-3"
            variant="outlined"
            density="compact"
            label="Password"
            type="password"
            v-model="password"
            class="mr-3"
        ></v-text-field>
        <v-text-field
            color="blue-darken-3"
            variant="outlined"
            density="compact"
            label="Confirm password"
            type="password"
            v-model="confirmPassword"
            class="ml-3"
        ></v-text-field>
      </v-row>
      <v-container class="d-flex justify-center mb-5">
        <v-row>
          <router-link to="/login">
            <v-btn
                density="comfortable"
                variant="text"
                class="text-blue-darken-3 ml-n3 "
            >Login instead</v-btn
            ></router-link>
          <v-btn density="comfortable" color="#1C58AE" class="text-white ml-16 pd-s" @click="submitRegister">
            Register
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import {UserApiService} from "../services/user-api.service";
import {LawyersApiService} from "../services/lawyers-api.service";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "register",
  data() {
    return {
      column: null,
      inline: null,
      name: "",
      last: "",
      type: "",
      email: "",
      password: "",
      confirmPassword: "",
      userService: null,
      lawyerService: null
    };
  },
  created() {
    if(this.$store.getters.inLogin) {
      window.location.href = '/'
    }


  },
  methods: {
    submitRegister() {
      if(this.type != "") {
        if(this.type == "client") {
          if(this.name != "" || this.last != "" || this.email != "" || this.password != "" || this.confirmPassword != "" ){

            this.userService = new UserApiService()
            this.userService.registerUser({
              "fisrtName": this.name,
              "lastName": this.last,
              "email": this.email,
              "password": this.password,
              "description": "-",
              "urlImage": "/",
              "type": "client"
            }).then(response => {
              console.log(response.data)
              if(response.data.length != 0) {
                window.location.href = '/login'
              } else {
                alert("Error al Registrarse")
              }
            })
          }
        } else {
          if(this.name != "" || this.last != "" || this.email != "" || this.password != "" || this.confirmPassword != "" ){

            this.lawyerService = new LawyersApiService()
            this.lawyerService.registerLawyer({
              "fisrtName": this.name,
              "lastName": this.last,
              "email": this.email,
              "password": this.password,
              "description": "-",
              "urlImage": "/",
              "type": "lawyer",
              "specialty": "string",
              "wonCases": 0,
              "totalCases": 0,
              "lostCases": 0
            }).then(response => {
              if(response.data.length != 0) {
                window.location.href = '/login'
              } else {
                alert("Error al registrarse")
              }
            })
          }
        }

      }
    }
  }
};
</script>

<style scoped>
.pd {
  margin: 10rem 0;
  padding: 2rem 0;
}
.pd-s {
  padding: 1rem !important;
}
</style>
