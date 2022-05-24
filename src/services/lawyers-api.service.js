import http from "../core/services/http";

export class LawyersApiService {
  getAllLawyers() {
    return http.get("/lawyers");
  }
}