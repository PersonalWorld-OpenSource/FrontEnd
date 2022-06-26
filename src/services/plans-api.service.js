import http from "../core/services/http";

export class PlansApiService {
    getAllPlans() {
        return http.get("/api/v1/plan");
    }

    getById(id) {
        return http.get(`/api/v1/plan/${id}`)
    }
}
