import http from "../core/services/http";

export class NotificationsApiService {
    getAllNotifications(id) {
        return http.get(`/Notifications?personId=${id}`)
    }
    getByIndex(id){
        return http.get(`/Notifications/${id}`);
    }
    create(data) {
        return http.post("/Notifications",data);
    }
    update(id, data) {
        return http.put(`/Notifications/${id}`,data);
    }
    delete(id) {
        return http.delete(`/Notifications/${id}`);
    }

}