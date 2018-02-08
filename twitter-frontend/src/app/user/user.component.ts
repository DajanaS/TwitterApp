import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PublishTweetComponent} from '../publish-tweet/publish-tweet.component';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import {Tweet} from '../model/tweet';
import {DatePipe} from '@angular/common';

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

  constructor(private modalService: NgbModal, private userService: UserManagementService) {
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => this.authenticatedUser = user);
    this.tweets = [
      new Tweet('Sodrzhina 1', this.authenticatedUser, new Date(), 5),
      new Tweet('Ova e vtorata sodrzinaaaaa!', this.authenticatedUser, new Date(), 10),
      new Tweet('Nesho sodrzhina 3', this.authenticatedUser, new Date(), 21),
      new Tweet('Eve ednaaa pogolemaa sodrzhina 4 lalalalal ne e neso mnogu lala !!!!', this.authenticatedUser, new Date(), 12)
    ];
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
