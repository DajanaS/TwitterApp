import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './model/tweet';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TweetManagementService {
  api = 'http://localhost:8080/tweets';
  private newTweetPublishedSource = new Subject<Tweet>();
  newTweetPublished$ = this.newTweetPublishedSource.asObservable();

  constructor(private http: HttpClient) {
  }

  newTweetPublished(tweet: Tweet) {
    this.newTweetPublishedSource.next(tweet);
  }

  addTweet(content: string): Observable<Tweet> {
    return this.http.post<Tweet>(this.api, content).pipe();
  }

  getTweets(id): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.api + '?id=' + id).pipe();
  }

  getAllTweets(page: number) {
    return this.http.get(this.api + '/all?page=' + page);
  }

  getTopTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.api + '/top').pipe();
  }

  getTotalTweets(): Observable<number> {
    return this.http.get<number>(this.api + '/totalTweets').pipe();
  }

}
