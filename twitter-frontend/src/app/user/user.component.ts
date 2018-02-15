import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PublishTweetComponent} from '../publish-tweet/publish-tweet.component';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import {Tweet} from '../model/tweet';
import {TweetManagementService} from '../tweet-management.service';
import {DeleteTweetComponent} from '../delete-tweet/delete-tweet.component';
import {forEach} from '@angular/router/src/utils/collection';
import {LikeManagementService} from '../like-management.service';
import {TweetLike} from '../model/tweetLike';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentRate = 5;
  authenticatedUser: User;
  tweets: Tweet[];
  liked: boolean[];
  like: TweetLike;

  constructor(private modalService: NgbModal,
              private userService: UserManagementService,
              private tweetService: TweetManagementService,
              private likeService: LikeManagementService) {
    tweetService.newTweetPublished$.subscribe(
      tweet => {
        this.tweets.reverse();
        this.tweets.push(tweet);
        this.tweets.reverse();
      });
    userService.profileDataChanged$.subscribe(user => {
      this.authenticatedUser = user;
    });
    tweetService.tweetDeleted$.subscribe(id => {
      this.tweetService.getTweets(this.authenticatedUser.id).subscribe(tweets => this.tweets = tweets);
    });
    likeService.newLikeAdded$.subscribe(like =>  {
      this.loadTweets();
    });
    likeService.likeRemoved$.subscribe(tweetId => {
      this.loadTweets();
    });
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => {
      this.authenticatedUser = user;
      this.loadTweets();
    });
  }

  loadTweets() {
    this.tweetService.getTweets(this.authenticatedUser.id).subscribe(tweets => {
      this.tweets = tweets;
      let index = 0;
      this.liked = [];
      this.liked.length = this.tweets.length;
      for (const tweet of this.tweets) {
        this.likeService.getLikesByTweet(tweet.id).subscribe(likes => {
          if (likes.length === 0) {
            tweet.likes = 0;
            this.liked[index] = false;
          } else {
            tweet.likes = likes.length;
            for (const like of likes) {
              if (like.likeOwner.email === this.authenticatedUser.email) {
                this.liked[index] = true;
                break;
              } else {
                this.liked[index] = false;
              }
            }
          }
          index++;
        });
      }
    }, (error) => {
      console.log(error.error.message);
    });
  }

  likeTweet(tweetIndex: number) {
    if (!this.liked[tweetIndex]) {
      const likedTweetId = this.tweets[tweetIndex].id;
      this.liked[tweetIndex] = true;
      this.likeService.addLike(likedTweetId).subscribe(like => {
        this.like = like;
        this.likeService.newLikedAdded(this.like);
      });
    } else {
      this.likeService.removeLike(this.tweets[tweetIndex].id).subscribe(resp => {
        if (resp) {
          this.likeService.likeRemoved(this.tweets[tweetIndex].id);
        }
      });
    }
  }

  open() {
    const modalRef = this.modalService.open(PublishTweetComponent);
    modalRef.componentInstance.name = this.authenticatedUser.name;
  }

  editProfile() {
    const modalRef = this.modalService.open(EditProfileComponent);
    modalRef.componentInstance.id = this.authenticatedUser.id;
    modalRef.componentInstance.oldName = this.authenticatedUser.name;
    modalRef.componentInstance.oldGender = this.authenticatedUser.gender;
    modalRef.componentInstance.oldEmail = this.authenticatedUser.email;
    modalRef.componentInstance.birth = this.authenticatedUser.birth;
    modalRef.componentInstance.newPassword = this.authenticatedUser.password;
    modalRef.componentInstance.avatar = this.authenticatedUser.avatar;
  }

  deleteTweet(id: number) {
    const modalRef = this.modalService.open(DeleteTweetComponent);
    modalRef.componentInstance.tweetId = id;
  }
}
