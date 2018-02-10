import {Injectable} from '@angular/core';
import {User} from './model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserManagementService {
  api = 'http://localhost:8080/';
  private profileDataChangedSource = new Subject<User>();
  profileDataChanged$ = this.profileDataChangedSource.asObservable();
  checkUser: User;

  userManagementServiceInfo$: BehaviorSubject<UserManagementService> = new BehaviorSubject<UserManagementService>(this);

  constructor(private http: HttpClient) {
  }

  profileDataChanged(user: User) {
    this.profileDataChangedSource.next(user);
  }

  getAllUsersEmails(): Observable<string[]> {
    return this.http.get<string[]>(this.api + 'users/all').pipe();
  }

  addUser(user: User) {
    return this.http.post(this.api + 'users', user).map((res: Response) => res.json());
  }

  editUser(user: User): Observable<User> {
    return this.http.post<User>(this.api + 'users', user).pipe();
  }

  authenticateUser(email: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(this.api + 'users/login', {email: email, password: password}).pipe();
  }

  logOutUser(email: string): Observable<boolean> {
    return this.http.post<boolean>(this.api + 'users/logout', email).pipe();
  }

  getAuthenticatedUser(): Observable<User> {
    return this.http.get<User>(this.api + 'users').pipe();
  }


  isLoggedInReal(): boolean {
    this.getAuthenticatedUser().do(user => this.checkUser = user);
    if (this.checkUser === null) {
      return false;
    } else {
      console.log(this.checkUser);
      return true;
    }
  }
}
