import {Component, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PublishTweetComponent} from '../publish-tweet/publish-tweet.component';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import {Tweet} from '../model/tweet';
import {TweetManagementService} from '../tweet-management.service';
import {DeleteTweetComponent} from '../delete-tweet/delete-tweet.component';
import {LikeManagementService} from '../like-management.service';
import {TweetLike} from '../model/tweetLike';
import {UploadAvatarComponent} from '../upload-avatar/upload-avatar.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  authenticatedUser: User;
  tweets: Tweet[];
  liked: boolean[];
  like: TweetLike;

  following: Set<string>;
  followers: Set<string>;

  @Output() totalRate: string;

  constructor(private modalService: NgbModal,
              private userService: UserManagementService,
              private tweetService: TweetManagementService,
              private likeService: LikeManagementService) {
    tweetService.newTweetPublished$.subscribe(
      tweet => {
        /*
        this.tweets.reverse();
        this.tweets.push(tweet);
        this.tweets.reverse();
         */
        this.loadTweets();
      });
    userService.profileDataChanged$.subscribe(user => this.authenticatedUser = user);
    userService.avatarUpdated$.subscribe(user => {
      this.authenticatedUser = user;
    });
    tweetService.tweetDeleted$.subscribe(id => {
      this.loadTweets();
    });
    likeService.newLikeAdded$.subscribe(like => {
      this.loadTweets();
    });
    likeService.likeRemoved$.subscribe(tweetId => {
      this.loadTweets();
    });
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => {
      this.authenticatedUser = user;
      this.setRating();
      this.loadTweets();
      this.setFollowers();
      this.setFollowing();
    });
  }

  setRating() {
    if (this.authenticatedUser.rating.length === 0) {
      this.totalRate = '0';
    } else {
      let sum = 0;
      this.authenticatedUser.rating.forEach(value => sum += value);
      this.totalRate = (sum / this.authenticatedUser.rating.length).toFixed(2);
    }
  }

  loadTweets() {
    this.tweetService.getTweetsByAuthor(this.authenticatedUser.id).subscribe(tweets => {
      this.tweets = tweets;
      let index = 0;
      this.liked = [];
      this.liked.length = this.tweets.length;
      for (const tweet of this.tweets) {
        const tweetLikes = tweet.likes;
        tweet.sumLikes = tweetLikes.length;
        if (tweetLikes.length === 0) {
          this.liked[index] = false;
        } else {
          for (const like of tweetLikes) {
            if (like.likeOwnerId === this.authenticatedUser.id) {
              this.liked[index] = true;
              break;
            } else {
              this.liked[index] = false;
            }
          }
        }
        index++;
      }
    }, (error) => {
      console.log(error.error.message);
    });
  }

  setFollowers() {
    this.followers = this.authenticatedUser.followers;
  }

  setFollowing() {
    this.following = this.authenticatedUser.following;
  }

  likeTweet(tweetIndex: number) {
    if (!this.liked[tweetIndex]) {
      const likedTweetId = this.tweets[tweetIndex].id;
      this.liked[tweetIndex] = true;
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

  changeAvatar() {
    const modalRef = this.modalService.open(UploadAvatarComponent);
    modalRef.componentInstance.userId = this.authenticatedUser.id;
  }
}
