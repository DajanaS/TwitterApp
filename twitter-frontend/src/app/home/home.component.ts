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
  authenticatedUser: User;
  authUserLiked: boolean[];
  like: TweetLike;
  totalTweets: number;

  constructor(private tweetService: TweetManagementService,
              private likeService: LikeManagementService,
              private userService: UserManagementService) {
    likeService.newLikeAdded$.subscribe(like => {
      this.getAllTweets();
      this.getTotalTweets();
    });
    likeService.likeRemoved$.subscribe(tweetId => {
      this.getAllTweets();
      this.getTotalTweets();
    });
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => {
      this.authenticatedUser = user;
      this.getAllTweets();
      // TODO: these 2 should be updated by adding the authUser.id, so that only tweets of the users they follow will be returned
      this.getTotalTweets();
    });
  }

  getAllTweets() {
    this.tweetService.getAllTweets(this.page).subscribe(data => {
      this.topTweets = data['content'];
      let index = 0;
      this.authUserLiked = [];
      this.authUserLiked.length = this.topTweets.length;
      for (const tweet of this.topTweets) {
        const tweetLikes = tweet.likes;
        tweet.sumLikes = tweetLikes.length;
        if (tweetLikes.length === 0) {
          this.authUserLiked[index] = false;
        } else {
          for (const like of tweetLikes) {
            if (like.likeOwnerId === this.authenticatedUser.id) {
              this.authUserLiked[index] = true;
              break;
            } else {
              this.authUserLiked[index] = false;
            }
          }
        }
        index++;
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

  likeTweet(tweetIndex: number) {
    if (!this.authUserLiked[tweetIndex]) {
      const likedTweetId = this.topTweets[tweetIndex].id;
      this.authUserLiked[tweetIndex] = true;
      this.likeService.addLike(likedTweetId, this.authenticatedUser.id).subscribe(like => {
        this.like = like;
        this.likeService.newLikedAdded(this.like);
      });
    } else {
      this.likeService.removeLike(this.topTweets[tweetIndex].id, this.authenticatedUser.id).subscribe(resp => {
        if (resp) {
          this.likeService.likeRemoved(this.topTweets[tweetIndex].id);
        }
      });
    }
  }
}
