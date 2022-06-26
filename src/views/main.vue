<template>
  <div>
    <div class="pt-2 d-flex">
      <div class="w-50 mr-lg-10">
        <h2 class="text-center">My Consults</h2>
        <div>
          <v-card
            v-for="(oneCase, index) in cases.splice(0, 3)"
            :key="index"
            class="caso ma-5 rounded-lg"
          >
            <v-card-title>
              <h3>
                {{ oneCase.title
                }}<span class="text-green-lighten-1">{{
                  oneCase.status
                }}</span>
              </h3>
            </v-card-title>
            <v-card-text>
              <p>
                {{ oneCase.description }}
              </p>
            </v-card-text>
            <v-card-actions class="justify-end mr-10 mb-2">
              <router-link
                class="text-decoration-none text-black"
                :to="`/consult/${oneCase.id}`"
                ><v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
                  >See Consult</v-btn
                ></router-link
              >
            </v-card-actions>
          </v-card>
        </div>
      </div>

      <div class="w-50 ml-lg-10">
        <h2 class="text-center">My Last Lawyer</h2>
        <v-img
          src="/../public/images/abogado.png"
          max-height="400"
          max-width="400"
          class="rounded ma-auto mt-5"
          position="center"
        ></v-img>
        <v-container class="w-100 d-flex justify-center">
          <router-link class="text-decoration-none text-black" to="/lawyer/2"
            ><v-btn
              class="boton-caso pgb-white rounded-0 pl-7 pr-7 pt-5 pb-5 justify-center"
              >Profile</v-btn
            ></router-link
          >
        </v-container>

        <h2 class="text-center">Notifications</h2>
        <div>
          <v-card
            v-for="(oneNotification, i) in notifications.splice(0, 2)"
            :key="i"
            class="caso ma-5 rounded-lg"
          >
            <v-card-title>
              <h3>{{ oneNotification.title }}</h3>
            </v-card-title>
            <v-card-text>
              <p>
                {{ oneNotification.description }}
              </p>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ConsultsApiService } from "../services/consults-api.service";
import { NotificationsApiService } from "../services/notifications-api.service";
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "main",
  data() {
    return {
      cases: [],
      casesService: null,
      notifications: [],
      notificationsService: null,
    };
  },
  created() {
    this.casesService = new ConsultsApiService();
    this.notificationsService = new NotificationsApiService();
    axios
      .all([
        this.casesService.getAllCases(this.$store.getters.getUser.type, this.$store.getters.getUser.id),
        this.notificationsService.getAllNotifications(this.$store.getters.getUser.id),
      ])
      .then((responses) => {
        this.cases = responses[0].data;
        this.notifications = responses[1].data;
      });
  },
  methods: {},
};
</script>
<style>
.caso {
  border: 1px solid #cecece !important;
  box-shadow: none !important;
}
.boton-caso {
  border: 1px solid #bdbdbd !important;
  background-color: #e9e9e9 !important;
}
.pgb-white {
  background-color: white !important;
}
</style>
