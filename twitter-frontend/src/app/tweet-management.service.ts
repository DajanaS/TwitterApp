import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TweetManagementService {

  api = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  addTweet(content: string) {
    return this.http.post(this.api + 'tweets', content).map((res: Response) => res.json());
  }
}
