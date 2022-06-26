import http from "../core/services/http";

export class PersonPlanApiService {
    getAllPersonPlans() {
        return http.get("/api/v1/personplan")
    }
    create(data) {
        return http.post(`/api/v1/personplan/`,data);
    }
    getLastByPersonId(id) {
        return http.get(`/api/v1/personplan/person/${id}/last`);
    }
    getByIndex(id){
        return http.get(`/api/v1/personplan/${id}`);
    }
    update(id, data) {
        return http.put(`/api/v1/personplan/${id}`,data);
    }
    delete(id) {
        return http.delete(`/api/v1/personplan/${id}`);
    }

}
