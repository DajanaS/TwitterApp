import {Component, OnInit} from '@angular/core';
import {TweetManagementService} from '../tweet-management.service';
import {Tweet} from '../model/tweet';
import {LikeManagementService} from '../like-management.service';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {TweetLike} from '../model/tweetLike';

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
  like: TweetLike;
  totalTweets: number;

  constructor(private tweetService: TweetManagementService,
              private likeService: LikeManagementService,
              private userService: UserManagementService) {
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => {
      this.currentUser = user;
    });
    this.getAllTweets();
    // TODO: should be updated by adding the id of the authUser, so that only tweets of the users they follow will be returned
    this.getTotalTweets();

    // this.loadTopTweets();
  }

  getAllTweets() {
    this.tweetService.getAllTweets(this.page).subscribe(data => {
      this.topTweets = data['content'];
      let index = 0;
      this.currentUserLiked = [];
      this.currentUserLiked.length = this.topTweets.length;
      for (const tweet of this.topTweets) {
        this.likeService.getLikesByTweet(tweet.id).subscribe(likes => {
          console.log('Reading like with id: ' + tweet.id + ' from user with name: ' + this.currentUser.name);
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
    }, (error) => {
      console.log(error.error.message);
    });
  }

  pageChanged() {
    this.getAllTweets();
  }

  getTotalTweets() {
    this.tweetService.getTotalTweets().subscribe(total => this.totalTweets = total);
  }

  likeTweet(likedTweetIndex: number) {
    console.log('Liked tweet index: ' + likedTweetIndex);
    const likedTweetId = this.topTweets[likedTweetIndex].id;
    this.likeService.addLike(likedTweetId).subscribe(like => {
      this.like = like;
      this.likeService.newLikedAdded(this.like);
    });
  }
}
