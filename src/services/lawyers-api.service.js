import http from "../core/services/http";

export class LawyersApiService {
  getAllLawyers() {
    return http.get("/Lawyers")
  }
  getByIndex(id){
    return http.get(`/Lawyers/${id}`);
  }
  create(data) {
    return http.post("/Lawyers",data);
  }
  update(id, data) {
    return http.put(`/Lawyers/${id}`,data);
  }
  delete(id) {
    return http.delete(`/Lawyers/${id}`);
  }

}