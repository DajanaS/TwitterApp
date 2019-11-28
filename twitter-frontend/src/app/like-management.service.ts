import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {TweetLike} from './model/tweetLike';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LikeManagementService {
  api = 'http://twitter-app.us-east-2.elasticbeanstalk.com/likes';
  private newLikeAddedSource = new Subject<TweetLike>();
  newLikeAdded$ = this.newLikeAddedSource.asObservable();
  private likeRemovedSource = new Subject<number>();
  likeRemoved$ = this.likeRemovedSource.asObservable();

  constructor(private http: HttpClient) {
  }

  newLikedAdded(like: TweetLike) {
    this.newLikeAddedSource.next(like);
  }

  likeRemoved(tweetId: number) {
    this.likeRemovedSource.next(tweetId);
  }

  addLike(tweetId, userId): Observable<TweetLike> {
    return this.http.post<TweetLike>(this.api, {likedTweetId: tweetId, userId: userId}).pipe();
    // parametri: {likedTweetId: tweetId, userId: da se zeme od local storage i da se predade na ovaa f-ja kako parametar}
  }

  getLikesByTweet(tweetId: number): Observable<TweetLike[]> {
    return this.http.get<TweetLike[]>(this.api + '/byTweet?id=' + tweetId).pipe();
  }

  removeLike(tweetId, userId): Observable<boolean> {
    return this.http.post<boolean>(this.api + '/remove', {likedTweetId: tweetId, userId: userId}).pipe();
    // parametri: {likedTweetId: tweetId, userId: da se zeme od local storage i da se predade na ovaa f-ja kako parametar}
  }
}
