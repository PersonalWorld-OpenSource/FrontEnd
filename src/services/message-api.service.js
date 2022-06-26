import http from "../core/services/http";

export class MessageApiServiceApiService {
    getAllMessages(id) {
        return http.get(`/api/v1/messages/${id}/consult`)
    }
    getByIndex(id){
        return http.get(`/api/v1/messages/${id}`);
    }
    create(data) {
        return http.post("/api/v1/messages",data);
    }
    update(id, data) {
        return http.put(`/api/v1/messages/${id}`,data);
    }
    delete(id) {
        return http.delete(`/api/v1/messages/${id}`);
    }

}