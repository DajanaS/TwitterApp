import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './model/tweet';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TweetManagementService {
  api = 'http://localhost:8080/';

  // Observable string sources
  private missionConfirmedSource = new Subject<Tweet>();

  // Observable string streams
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  confirmMission(tweet: Tweet) {
    this.missionConfirmedSource.next(tweet);
  }

  constructor(private http: HttpClient) {
  }

  addTweet(content: string): Observable<Tweet> {
    return this.http.post<Tweet>(this.api + 'tweets', content).pipe();
  }

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.api + 'tweets').pipe(
    );
  }
}
