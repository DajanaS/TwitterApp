import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Tweet} from './model/tweet';
import {User} from './model/user';

@Injectable()
export class TweetManagementService {

  api = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  addTweet(content: string) {
    return this.http.post(this.api + 'tweets', content).map((res: Response) => res.json());
  }

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.api + 'tweets').pipe(
    );
  }
}
