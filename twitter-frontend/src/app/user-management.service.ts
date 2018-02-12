import {Injectable} from '@angular/core';
import {User} from './model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserManagementService {
  api = 'http://localhost:8080/';
  private profileDataChangedSource = new Subject<User>();
  profileDataChanged$ = this.profileDataChangedSource.asObservable();
  isLoggedIn: boolean;

  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  profileDataChanged(user: User) {
    this.profileDataChangedSource.next(user);
  }

  addUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.api + 'users', user).pipe();
  }

  editUser(user: User): Observable<User> {
    return this.http.post<User>(this.api + 'users/update', user).pipe();
  }

  getAuthenticatedUser(): Observable<User> {
    return this.http.get<User>(this.api + 'users').pipe();
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.api + 'users/id/' + id).pipe();
  }

  getAllUsersEmails(): Observable<string[]> {
    return this.http.get<string[]>(this.api + 'users/all').pipe();
  }

  getUserByEmail(email): Observable<number> {
    return this.http.get<number>(this.api + 'users/email?email=' + email).pipe();
  }

  authenticateUser(email: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(this.api + 'users/login', {email: email, password: password}).pipe();
  }

  logOutUser(email: string): Observable<boolean> {
    return this.http.post<boolean>(this.api + 'users/logout', email).pipe();
  }
}
