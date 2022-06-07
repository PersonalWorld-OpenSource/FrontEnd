import http from "../core/services/http";

export class LawyersApiService {
  getAllLawyers() {
    return http.get("/profile?type=lawyer")
  }
  getByIndex(id){
    return http.get(`/profile/${id}`);
  }
  create(data) {
    return http.post("/profile",data);
  }
  update(id, data) {
    return http.put(`/profile/${id}`,data);
  }
  delete(id) {
    return http.delete(`/profile/${id}`);
  }

}