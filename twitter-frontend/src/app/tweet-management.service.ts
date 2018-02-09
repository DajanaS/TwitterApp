import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './model/tweet';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TweetManagementService {
  api = 'http://localhost:8080/';

  // Observable string sources
  private newTweetPublishedSource = new Subject<Tweet>();

  // Observable string streams
  newTweetPublished$ = this.newTweetPublishedSource.asObservable();

  newTweetPublished(tweet: Tweet) {
    this.newTweetPublishedSource.next(tweet);
  }

  constructor(private http: HttpClient) {
  }

  addTweet(content: string): Observable<Tweet> {
    return this.http.post<Tweet>(this.api + 'tweets', content).pipe();
  }

  getTweets(id): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.api + 'tweets?id=' + id).pipe(
    );
  }
}
