import http from "../core/services/http";

export class CasesApiService {
  getAllCases() {
    return http.get("/cases");
  }
}
