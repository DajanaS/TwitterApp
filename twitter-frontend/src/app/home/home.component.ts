import { Component, OnInit } from '@angular/core';
import {TweetManagementService} from '../tweet-management.service';
import {Tweet} from '../model/tweet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentRate = 5;
  page = 1;
  topTweets: Tweet[];

  constructor(private tweetManagementService: TweetManagementService) { }

  ngOnInit() {
    this.loadTopTweets();
  }

  loadTopTweets() {
    this.tweetManagementService.getTopTweets().subscribe(tweets => {
      this.topTweets = tweets;
    });
  }

}
