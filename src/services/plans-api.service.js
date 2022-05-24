import http from "../core/services/http";

export class PlansApiService {
    getAllPlans() {
        return http.get("/plans");
    }
}
