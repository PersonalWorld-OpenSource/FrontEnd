import http from "../core/services/http";

export class UserApiService {
    loginUser(data){
        return http.post("/auth/sign-in",data);
    }
    registerUser(data){
        return http.post("/auth/sign-up",data);
    }
    getAllUsers() {
        return http.get("/api/v1/person")
    }
    getByIndex(id){
        return http.get(`/api/v1/person/${id}`);
    }
    update(id, data) {
        return http.put(`/api/v1/person/${id}`,data);
    }
    delete(id) {
        return http.delete(`/api/v1/person/${id}`);
    }

}