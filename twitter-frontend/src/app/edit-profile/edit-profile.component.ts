import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';

@Component({
  selector: 'app-edit-profile',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edit profile {{name}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <textarea [(ngModel)]="value" class="form-control" id="name" placeholder="Enter your text here" required></textarea>
    </div>
    <div class="modal-footer">
      <button type="button" (click)="onSubmit()" routerLink="/nav" class="btn btn-primary">Submit</button>
    </div>
  `,
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Input() id;
  @Input() name;
  @Input() gender;
  @Input() email;
  @Input() birth;
  @Input() oldPassword;
  password = '';
  @Input() newPassword;
  @Input() avatar;

  constructor(public activeModal: NgbActiveModal, private userService: UserManagementService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.name = (<HTMLInputElement>document.getElementById('name')).value;
    // get all attributes' new values
    // user enters (old) 'password' then new: first check if the old is correct and then update all changes, if it is not correct just return message on front-end
    const updatedUser = new User(this.name, this.gender, this.email, this.birth, this.newPassword);
    updatedUser.setAvatar(this.avatar); // for avatar -> Upload button, when using check if it is not available, then use the default ones
    updatedUser.setId(this.id);
    this.userService.editUser(updatedUser).subscribe(/* */);
    this.activeModal.close();
  }
}
