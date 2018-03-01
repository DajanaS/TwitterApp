import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user';
import {Tweet} from '../model/tweet';
import {UserManagementService} from '../user-management.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TweetManagementService} from '../tweet-management.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {LikeManagementService} from '../like-management.service';
import {TweetLike} from '../model/tweetLike';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  id: number;
  tweets: Tweet[];
  currentUser: User;
  authenticatedUser: User;
  currentRate: number;
  currentLiked: boolean[];
  like: TweetLike;

  following: Set<string>;
  followers: Set<string>;

  didFollow: boolean;

  @Output() totalRate: string;

  constructor(private route: ActivatedRoute,
              private modalService: NgbModal,
              private userService: UserManagementService,
              private tweetService: TweetManagementService,
              private likeService: LikeManagementService) {
    userService.rateUser$.subscribe(user => {
      this.currentUser = user;
      this.setRating();
    });
    likeService.newLikeAdded$.subscribe(like => {
      this.setTweets();
    });
    likeService.likeRemoved$.subscribe(tweetId => {
      this.setTweets();
    });
    userService.userFollowed$.subscribe(user => {
      this.currentUser = user;
      this.setFollowers();
    });
    userService.userUnfollowed$.subscribe(user => {
      this.currentUser = user;
      this.setFollowers();
    });
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => {
      this.authenticatedUser = user;
    });
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.userService.getUserById(this.id).subscribe(user => {
        this.currentUser = user;
        this.setInitialCurrentRate();
        this.setRating();
        this.setTweets();
        this.setFollowers();
        this.setFollowing();
      });
    });
  }

  logOut() {
    localStorage['authUserId'] = -1;
  }

  setInitialCurrentRate() {
    if (this.currentUser.rating.length === 0) {
      this.currentRate = 0;
    } else {
      let sum = 0;
      this.currentUser.rating.forEach(value => sum += value);
      this.currentRate = sum / this.currentUser.rating.length;
    }
  }

  setRating() {
    if (this.currentUser.rating.length === 0) {
      this.totalRate = '0';
    } else {
      let sum = 0;
      this.currentUser.rating.forEach(value => sum += value);
      this.totalRate = (sum / this.currentUser.rating.length).toFixed(2);
    }
  }

  setTweets() {
    this.tweetService.getTweetsByAuthor(this.currentUser.id).subscribe(tweets => {
      this.tweets = tweets;
      let index = 0;
      this.currentLiked = [];
      this.currentLiked.length = this.tweets.length;
      for (const tweet of this.tweets) {
        const tweetLikes = tweet.likes;
        tweet.sumLikes = tweetLikes.length;
        if (tweetLikes.length === 0) {
          this.currentLiked[index] = false;
        } else {
          for (const like of tweetLikes) {
            if (like.likeOwnerId === this.authenticatedUser.id) {
              this.currentLiked[index] = true;
              break;
            } else {
              this.currentLiked[index] = false;
            }
          }
        }
        index++;
      }
    });
  }

  setFollowers() {
    this.didFollow = false;
    this.followers = this.currentUser.followers;
    this.followers.forEach(follower => {
      if (follower === this.authenticatedUser.email) {
        this.didFollow = true;
      }
    });
  }

  setFollowing() {
    this.following = this.currentUser.following;
  }

  rateUser(event) {
    this.userService.rateUser(this.currentUser.id, this.authenticatedUser.id, event).subscribe(user => {
      this.userService.userRated(user);
    });
  }

  likeTweet(tweetIndex: number) {
    if (!this.currentLiked[tweetIndex]) {
      const likedTweetId = this.tweets[tweetIndex].id;
      this.currentLiked[tweetIndex] = true;
      this.likeService.addLike(likedTweetId, this.authenticatedUser.id).subscribe(like => {
        this.like = like;
        this.likeService.newLikedAdded(this.like);
      });
    } else {
      this.likeService.removeLike(this.tweets[tweetIndex].id, this.authenticatedUser.id).subscribe(resp => {
        if (resp) {
          this.likeService.likeRemoved(this.tweets[tweetIndex].id);
        }
      });
    }
  }

  followUser() {
    this.userService.followUser(this.currentUser.id, this.authenticatedUser.id).subscribe(user => {
      this.userService.userFollowed(user);
    });
  }

  unfollowUser() {
    this.userService.unfollowUser(this.currentUser.id, this.authenticatedUser.id).subscribe(user => {
      this.userService.userUnfollowed(user);
    });
  }
}
