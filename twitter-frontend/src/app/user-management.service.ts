import {Injectable} from '@angular/core';
import {User} from './model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

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

  authenticateUser(email: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(this.api + 'users/login', {email: email, password: password}).pipe();
  }

  getAuthenticatedUser(): Observable<User> {
    return this.http.get<User>(this.api + 'users').pipe(
    );
  }
}
