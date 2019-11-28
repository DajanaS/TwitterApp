import {Injectable} from '@angular/core';
import {User} from './model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserManagementService {
  api = 'http://twitter-app.us-east-2.elasticbeanstalk.com/users';
  isLoggedIn: boolean;
  private profileDataChangedSource = new Subject<User>();
  profileDataChanged$ = this.profileDataChangedSource.asObservable();
  private avatarUpdatedSource = new Subject<User>();
  avatarUpdated$ = this.avatarUpdatedSource.asObservable();
  private userFollowedSource = new Subject<User>();
  userFollowed$ = this.userFollowedSource.asObservable();
  private userUnfollowedSource = new Subject<User>();
  userUnfollowed$ = this.userUnfollowedSource.asObservable();
  private rateUserSource = new Subject<User>();
  rateUser$ = this.rateUserSource.asObservable();

  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  profileDataChanged(user: User) {
    this.profileDataChangedSource.next(user);
  }

  avatarUpdated(user: User) {
    this.avatarUpdatedSource.next(user);
  }

  userFollowed(user: User) {
    this.userFollowedSource.next(user);
  }

  userUnfollowed(user: User) {
    this.userUnfollowedSource.next(user);
  }

  userRated(user: User) {
    this.rateUserSource.next(user);
  }

  addUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.api, user).pipe();
  }

  editUser(user: User): Observable<User> {
    return this.http.post<User>(this.api + '/update', user).pipe();
  }

  getAuthenticatedUser(): Observable<User> {
    const id = localStorage['authUserId'] as number;
    if (id === -1) {
      return null;
    }
    return this.http.get<User>(this.api + '/' + id).pipe();
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.api + '/' + id).pipe();
  }

  getAllUsersEmails(id: number): Observable<string[]> {
    return this.http.get<string[]>(this.api + '/emails/' + id).pipe();
  }

  getUserByEmail(email): Observable<number> {
    return this.http.get<number>(this.api + '/email?email=' + email).pipe();
  }

  authenticateUser(email: string, password: string): Observable<number> {
    return this.http.post<number>(this.api + '/login', {email: email, password: password}).pipe();
  }

  updateAvatar(userId, formModel): Observable<User> {
    return this.http.post<User>(this.api + '/' + userId + '/upload/avatar', formModel).pipe();
  }

  followUser(userId, followerId): Observable<User> {
    return this.http.post<User>(this.api + '/' + followerId + '/follow/' + userId, '').pipe();
  }

  unfollowUser(userId, followerId): Observable<User> {
    return this.http.post<User>(this.api + '/' + followerId + '/unfollow/' + userId, '').pipe();
  }

  rateUser(userId, senderId, rating): Observable<User> {
    return this.http.post<User>(this.api + '/' + senderId + '/rate/' + userId, rating).pipe();
  }
}
