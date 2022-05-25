import http from "../core/services/http";

export class UserApiService {
    getAllUsers() {
        return http.get("/profile")
    }
    getByIndex(id){
        return http.get(`/profile/${id}`);
    }
    create(data) {
        return http.post("/profile",data);
    }
    update(id, data) {
        return http.put(`/profile/${id}`,data);
    }
    delete(id) {
        return http.delete(`/profile/${id}`);
    }
    findAccount(email,password){
        return http.get(`/profile?email=${email}&password=${password}`)
    }

}