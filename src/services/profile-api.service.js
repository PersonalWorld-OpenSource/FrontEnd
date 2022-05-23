import http from "../core/services/http";

export class ProfilesApiService {
  getAllProfiles() {
    return http.get("/profile");
  }
  getById(id) {
    return http.get(`/profile/${id}`);
  }
  update(id, data) {
    return http.put(`/profile/${id}`, data);
  }
}
