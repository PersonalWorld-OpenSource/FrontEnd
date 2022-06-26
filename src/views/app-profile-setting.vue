<template>

  <UserProfile v-if="this.$store.getters.getUser.type == 'client'"></UserProfile>
  <LawyerProfile v-else></LawyerProfile>
</template>

<script>
import UserProfile from './user-profile-edit.vue'
import LawyerProfile from "./lawyer-profile-edit.vue";
export default {

  name: "main-home",
  data() {
    return {
      inLogin: null
    }
  },
  created() {
  },
  components: {
    UserProfile,
    LawyerProfile
  }

}
</script>
