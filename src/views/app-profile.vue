<template>
  <v-container fluid>
    <v-row class="justify-center mt-16">
      <v-col cols="4" md="2">
        <h2 class="text-md-center mb-5">Eduardo Lozano</h2>
        <v-img
          max-height="600"
          max-width="600"
          src="images/profilePicture.png"
        ></v-img>
      </v-col>
      <v-col cols="8" md="7">
        <p class="rounded-lg bg-white pa-4 ma-11">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32 en-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.
        </p>
        <div class="text-md-center">
          <router-link class="text-decoration-none" to="/editar-perfil">
            <v-btn elevation="8" class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5">
              <v-icon small>mdi-arrow-right-drop-circle</v-icon>
              Editar Perfil
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "App-profile",
};
</script>

<style scoped></style>