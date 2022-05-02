<template>
  <v-app>
    <v-main>
      <app-profile></app-profile>
      <app-profile-setting></app-profile-setting
    ></v-main>
  </v-app>
</template>

<script>
import appProfile from "./views/app-profile.vue";
import appProfileSetting from "./views/app-profile-setting.vue";

export default {
  name: "App",

  components: {
    appProfile,
    appProfileSetting,
  },

  data: () => ({
    //
  }),
};
</script>
