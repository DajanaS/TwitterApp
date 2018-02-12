import { Component, OnInit } from '@angular/core';
import {TweetManagementService} from '../tweet-management.service';
import {Tweet} from '../model/tweet';
import {LikeManagementService} from '../like-management.service';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {Like} from '../model/like';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;
  topTweets: Tweet[];
  currentUser: User;
  currentUserLiked: boolean[];
  like: Like;

  constructor(private tweetManagementService: TweetManagementService,
              private likeManagementService: LikeManagementService,
              private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.userManagementService.getAuthenticatedUser().subscribe(user => {
      this.currentUser = user;
    });
    this.loadTopTweets();
  }

  loadTopTweets() {
    this.tweetManagementService.getTopTweets().subscribe(tweets => {
      this.topTweets = tweets;
      let index = 0;
      this.currentUserLiked = [];
      this.currentUserLiked.length = this.topTweets.length;
      for (const tweet of this.topTweets) {
        this.likeManagementService.getLikesByTweet(tweet.id).subscribe(likes => {
          if (likes.length === 0) {
            tweet.likes = 0;
            this.currentUserLiked[index] = false;
          } else {
            tweet.likes = likes.length;
            for (const like of likes) {
              if (like.likeOwner.email === this.currentUser.email) {
                this.currentUserLiked[index] = true;
              } else {
                this.currentUserLiked[index] = false;
              }
              index++;
            }
          }
        });
      }
    });
  }

  likeTweet(likedTweetIndex: number) {
    /*
    console.log('Liked tweet index: ' + likedTweetIndex);
      const likedTweetId = this.topTweets[likedTweetIndex].id;
      this.likeManagementService.addLike(likedTweetId).subscribe(like => {
        this.like = like;
        this.likeManagementService.newLikedAdded(this.like);
      });
     */
  }

}
