import http from "../core/services/http";

export class ProfilesApiService {
  getAllProfiles() {
    return http.get("/profile");
  }
}
