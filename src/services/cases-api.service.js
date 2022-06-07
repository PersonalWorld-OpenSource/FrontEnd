import http from "../core/services/http";

export class CasesApiService {
  getAllCases(type, id) {
    return http.get(`/cases?${type}=${id}`)
  }
  getByIndex(id){
    return http.get(`/cases/${id}`);
  }
  create(data) {
    return http.post("/cases",data);
  }
  update(id, data) {
    return http.put(`/cases/${id}`,data);
  }
  delete(id) {
    return http.delete(`/cases/${id}`);
  }

}