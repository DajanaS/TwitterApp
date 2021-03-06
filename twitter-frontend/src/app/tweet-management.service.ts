import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './model/tweet';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TweetManagementService {
  api = 'http://twitter-app.us-east-2.elasticbeanstalk.com/tweets';
  private newTweetPublishedSource = new Subject<Tweet>();
  newTweetPublished$ = this.newTweetPublishedSource.asObservable();
  private tweetDeletedSource = new Subject<number>();
  tweetDeleted$ = this.tweetDeletedSource.asObservable();

  constructor(private http: HttpClient) {
  }

  newTweetPublished(tweet: Tweet) {
    this.newTweetPublishedSource.next(tweet);
  }

  tweetDeleted(id: number) {
    this.tweetDeletedSource.next(id);
  }

  getTweetsByAuthor(id): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.api + '/author/' + id).pipe();
  }

  getAllTweets(page: number) {
    return this.http.get(this.api + '/all?page=' + page);
  }

  getTotalTweets(): Observable<number> {
    return this.http.get<number>(this.api + '/total').pipe();
  }

  addTweet(content: string, userId: number): Observable<Tweet> {
    return this.http.post<Tweet>(this.api, {content: content, userId: userId}).pipe();
  }

  deleteTweet(id): Observable<boolean> {
    return this.http.post<boolean>(this.api + '/delete', id).pipe();
  }
}
