import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {TweetLike} from './model/tweetLike';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LikeManagementService {
  api = 'http://localhost:8080/';
  private newLikeAddedSource = new Subject<TweetLike>();
  newLikeAdded$ = this.newLikeAddedSource.asObservable();

  constructor(private http: HttpClient) {
  }

  newLikedAdded(like: TweetLike) {
    this.newLikeAddedSource.next(like);
  }

  addLike(likedTweetId: number): Observable<TweetLike> {
    return this.http.post<TweetLike>(this.api + 'likes', likedTweetId).pipe();
  }

  getLikesByTweet(tweetId: number): Observable<TweetLike[]> {
    console.log('Get likes for tweet with id: ' + tweetId);
    return this.http.get<TweetLike[]>(this.api + 'likes/byTweet?id=' + tweetId).pipe();
  }

}
