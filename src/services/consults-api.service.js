import http from "../core/services/http";

export class ConsultsApiService {
  getAllCases(type, id) {
    if(type == "lawyer") {
      return http.get(`/api/v1/personlawyers/${id}/consults`)
    } else {
      return http.get(`/api/v1/persons/${id}/consults`)
    }

  }

  getByIndex(id){
    return http.get(`/api/v1/consults/${id}`);
  }
  create(data) {
    return http.post("/api/v1/consults/",data);
  }
  update(id, data) {
    return http.put(`/api/v1/consults/${id}`,data);
  }
  delete(id) {
    return http.delete(`/api/v1/consults/${id}`);
  }

}