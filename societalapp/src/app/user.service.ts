import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modal';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: Array<User> = [];
  constructor(private http: HttpClient) {}

  saveUser(user: User) {
    // this.userData.push(user);
    return this.http.post(`http://localhost:8080/api/insert`, user);
  }

  getAllUser() {
    return this.http.get<Array<User>>(`http://localhost:8080/api/families`);
  }

  getUserByID(id: number) {
    return this.http.get<User>(`http://localhost:8080/api/families/${id}`);
  }

  updateUserById(userId: number, userdata: User) {
    return this.http.put(
      `http://localhost:8080/api/families/${userId}`,
      userdata
    );
  }

  deleteUserById(id: any) {
    return this.http.delete(`http://localhost:8080/api/families/${id}`);
  }
}
