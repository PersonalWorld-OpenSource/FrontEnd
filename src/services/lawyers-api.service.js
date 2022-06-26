import http from "../core/services/http";

export class LawyersApiService {
  registerLawyer(data){
    return http.post("/auth/sign-upl",data);
  }
  getAllLawyers() {
    return http.get("/api/v1/personlawyers")
  }
  getByIndex(id){
    return http.get(`/api/v1/personlawyers/${id}`);
  }
  update(id, data) {
    return http.put(`/api/v1/personlawyers/${id}`,data);
  }
  delete(id) {
    return http.delete(`/api/v1/personlawyers/${id}`);
  }

}