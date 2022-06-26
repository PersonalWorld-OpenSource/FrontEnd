import http from "../core/services/http";

export class NotificationsApiService {
    getAllNotifications(id) {
        return http.get(`/api/v1/notifications/persons/${id}`)
    }
    getByIndex(id){
        return http.get(`/api/v1/notifications/${id}`);
    }
    create(data) {
        return http.post("/api/v1/notifications/",data);
    }
    update(id, data) {
        return http.put(`/api/v1/notifications/${id}`,data);
    }
    delete(id) {
        return http.delete(`/api/v1/notifications/${id}`);
    }

}