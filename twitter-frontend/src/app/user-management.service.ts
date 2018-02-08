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
    return this.http.post(this.api + 'users', user).map((res: Response) => res.json());
  }

  authenticateUser(email: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(this.api + 'users/login', {email: email, password: password}).pipe();
  }

  logOutUser(email: string): Observable<boolean> {
    return this.http.post<boolean>(this.api + 'users/logout', email).pipe();
  }

  getAuthenticatedUser(): Observable<User> {
    return this.http.get<User>(this.api + 'users').pipe(
    );
  }

  editUser(user: User) {
    return this.http.post(this.api + 'users', user).map((res: Response) => res.json());
  }
}
