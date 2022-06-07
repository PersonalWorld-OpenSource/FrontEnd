<template>
  <v-footer dark padless class="justify-center mt-16" >
    <v-card class="flex  elevation-0">
      <v-card-title>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 elevation-0">
          <v-icon size="24px" class="text-indigo-darken-3">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        <p>All rights reserved</p>{{ new Date().getFullYear() }} — <strong>PersonalWorld</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style scoped>

</style>