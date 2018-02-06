import {Injectable} from '@angular/core';
import {User} from './model/user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserManagementService {

  api = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    return this.http.post(this.api + 'users', {
      name: user.name,
      gender: user.gender,
      email: user.email,
      birth: user.birth,
      password: user.password,
      avatar: user.avatar
    }).map((res: Response) => res.json());
  }

  authenticateUser(email: string, password: string) {
    return this.http.post(this.api + 'users/login', {email: email, password: password}).map((res: Response) => res.json());
  }
}
