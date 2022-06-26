<template>
  <div class="d-flex flex-column ma-auto mt-7">
    <h2 class="text-center">Notifications</h2>

    <div>
      <v-card
        v-for="(oneNotification, index) in notifications"
        :key="index"
        class="caso ma-5 rounded-lg"
      >
        <v-card-title>
          <h3>
            {{ oneNotification.title
            }}<span class="text-green-lighten-1">{{
              oneNotification.condition
            }}</span>
          </h3>
        </v-card-title>
        <v-card-text>
          <p>
            {{ oneNotification.description }}
          </p>
        </v-card-text>
        <v-card-actions class="justify-end mr-10 mb-2">
          <router-link
            class="text-decoration-none text-black"
            :to="`/consult/${oneNotification.consult.id}`"
            ><v-btn class="boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"
              @click="removeNotification(oneNotification.id)">View Message</v-btn
            ></router-link
          >
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { NotificationsApiService } from "../services/notifications-api.service";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "notifications",
  data() {
    return {
      notifications: [],
      notificationsService: null,
    };
  },
  created() {
    if(!this.$store.getters.inLogin) {
      window.location.href = '/'
    }
    this.notificationsService = new NotificationsApiService();
    this.notificationsService.getAllNotifications(this.$store.getters.getUser.id).then((response) => {
      this.notifications = response.data;
    });
  },
  methods: {
    removeNotification(id){
      this.notificationsService.delete(id)
    }
  }
};
</script>

<style scoped></style>
