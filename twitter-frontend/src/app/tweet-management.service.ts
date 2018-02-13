import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './model/tweet';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TweetManagementService {
  api = 'http://localhost:8080/';
  private newTweetPublishedSource = new Subject<Tweet>();
  newTweetPublished$ = this.newTweetPublishedSource.asObservable();

  constructor(private http: HttpClient) {
  }

  newTweetPublished(tweet: Tweet) {
    this.newTweetPublishedSource.next(tweet);
  }

  addTweet(content: string): Observable<Tweet> {
    return this.http.post<Tweet>(this.api + 'tweets', content).pipe();
  }

  getTweets(id): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.api + 'tweets?id=' + id).pipe(
    );
  }

  getTopTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.api + 'tweets/top').pipe();
  }

}
