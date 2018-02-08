import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PublishTweetComponent} from '../publish-tweet/publish-tweet.component';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import {Tweet} from '../model/tweet';
import {TweetManagementService} from '../tweet-management.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentRate = 5;
  liked = false;
  authenticatedUser: User;
  tweets: Tweet[];

  constructor(private modalService: NgbModal, private userService: UserManagementService,
              private tweetService: TweetManagementService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => this.authenticatedUser = user);
    this.update();
  }

  public update() {
    this.tweetService.getTweets().subscribe(tweets => this.tweets = tweets);
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
}
