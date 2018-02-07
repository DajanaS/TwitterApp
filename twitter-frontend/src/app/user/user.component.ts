import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PublishTweetComponent} from '../publish-tweet/publish-tweet.component';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentRate = 5;
  liked = false;
  authenticatedUser: User;

  constructor(private modalService: NgbModal, private userService: UserManagementService) {
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => this.authenticatedUser = user);
  }

  open() {
    const modalRef = this.modalService.open(PublishTweetComponent);
    modalRef.componentInstance.name = this.authenticatedUser.name;
  }

  editProfile() {
    const modalRef = this.modalService.open(EditProfileComponent);
    modalRef.componentInstance.name = this.authenticatedUser.name;
  }
}
