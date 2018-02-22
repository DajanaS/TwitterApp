import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {TweetLike} from './model/tweetLike';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LikeManagementService {
  api = 'http://localhost:8080/likes';
  private newLikeAddedSource = new Subject<TweetLike>();
  private likeRemovedSource = new Subject<number>();
  newLikeAdded$ = this.newLikeAddedSource.asObservable();
  likeRemoved$ = this.likeRemovedSource.asObservable();

  constructor(private http: HttpClient) {
  }

  newLikedAdded(like: TweetLike) {
    this.newLikeAddedSource.next(like);
  }

  addLike(likedTweetId: number): Observable<TweetLike> {
    return this.http.post<TweetLike>(this.api, likedTweetId).pipe();
    // parametri: {likedTweetId: tweetId, userId: da se zeme od local storage i da se predade na ovaa f-ja kako parametar}
  }

  getLikesByTweet(tweetId: number): Observable<TweetLike[]> {
    return this.http.get<TweetLike[]>(this.api + '/byTweet?id=' + tweetId).pipe();
  }

  removeLike(tweetId: number): Observable<boolean> {
    return this.http.post<boolean>(this.api + '/remove', tweetId).pipe();
    // parametri: {likedTweetId: tweetId, userId: da se zeme od local storage i da se predade na ovaa f-ja kako parametar}
  }

  likeRemoved(tweetId: number) {
    this.likeRemovedSource.next(tweetId);
  }

}
