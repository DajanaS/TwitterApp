import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Like} from './model/like';
import {HttpClient} from '@angular/common/http';
import {User} from './model/user';
import {Tweet} from './model/tweet';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LikeManagementService {
  api = 'http://localhost:8080/';
  private newLikeAddedSource = new Subject<Like>();
  newLikeAdded$ = this.newLikeAddedSource.asObservable();

  constructor(private http: HttpClient) { }

  newLikedAdded(like: Like) {
    this.newLikeAddedSource.next(like);
  }

  addLike(likedTweetId: number): Observable<Like> {
    return this.http.post<Like>(this.api + 'likes', likedTweetId).pipe();
  }

  getLikesByTweet(tweetId: number): Observable<Like[]> {
    return this.http.get<Like[]>(this.api + 'likes/byTweet?id=' + tweetId).pipe();
  }

}
