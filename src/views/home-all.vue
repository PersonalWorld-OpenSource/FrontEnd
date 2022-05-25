<template>
  <div class="hm-text">
    <div class="overlay d-flex align-lg-center justify-center">
      <h2 class="text-center text-white text-lg-h2 font-weight-bold">
        Find your Ideal Lawyer
      </h2>
    </div>
  </div>
  <div class="bg-grey-lighten-3 lawyers pb-lg-16 pt-lg-16">
    <div class="pb-lg-2">
      <h3 class="text-center text-black text-sm-h4 font-weight-bold">
        Verified Lawyers
      </h3>
    </div>
    <v-container class="d-flex justify-center pa-xxl-16">
      <v-container
        v-for="(oneLawyer, index) in lawyers.splice(0, 3)"
        :key="index"
        class="one-lawyer d-flex ma-5 rounded-lg"
      >
        <div>
          <img
            :src="`${oneLawyer.url}`"
            alt="Img Lawyer"
            class="img-lawyer pr-2"
          />
        </div>
        <div>
          <h4 class="text-m font-weight-bold">{{ oneLawyer.name }}</h4>
          <p class="text-s font-weight-bold">{{ oneLawyer.age }}</p>
          <p class="text-s font-weight-bold">{{ oneLawyer.specialty }}</p>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { LawyersApiService } from "../services/lawyers-api.service";

export default {
  name: "home-all",
  data() {
    return {
      lawyers: [],
      lawyersService: null,
    };
  },
  created() {
    if(this.$store.getters.inLogin) {
      window.location.href = '/'
    }
    this.lawyersService = new LawyersApiService();
    this.lawyersService.getAllLawyers().then((response) => {
      this.lawyers = response.data;
    });
  },
};
</script>

<style scoped>
.hm-text {
  height: 45rem;
  background: url("/public/images/abogado.jpeg") no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}
.overlay {
  height: 45rem;
  background: linear-gradient(
    0deg,
    rgba(20, 20, 20, 0.404) 100%,
    rgba(96, 56, 19, 0.192) 100%
  );
}
.text-m {
  font-size: 20px;
}
.text-l {
  font-size: 25px;
}
.text-s {
  font-size: 15px;
}
.img-lawyer {
  width: 200px;
  height: 200px;
}
.lawyers {
  padding-top: 5rem;
}
.one-lawyer {
  background: white;
  width: 400px;
  border: 1px solid #bdbdbd !important;
}
</style>
