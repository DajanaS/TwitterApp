import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edit profile</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form [formGroup]="userForm">

        <div class="form-group">
          <label for="fullName">Full name</label> <input type="text" class="form-control" id="fullName"
                                                         formControlName="name" placeholder="Full Name" required>
        </div>
        <div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">
          <div *ngIf="name.errors.required">
            Full name is required.
          </div>
          <div *ngIf="name.errors.minlength">
            The name must be between 2 and 30 characters.
          </div>
          <div *ngIf="name.errors.maxlength">
            The name must be between 2 and 30 characters.
          </div>
        </div>

        <div class="form-group">
          <label>Select your gender</label><br/>
          <input type="radio" name="gender" value="m" formControlName="gender"> Male
          <input type="radio" name="gender" value="f" formControlName="gender"> Female
        </div>

        <div class="form-group">
          <label for="email">Email address</label> <input type="email" class="form-control" id="email"
                                                          [(ngModel)]="newEmail" formControlName="email"
                                                          placeholder="example@domain.com" required>
        </div>
        <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">
          <div *ngIf="email.errors.required">
            The e-mail is required.
          </div>
          <div *ngIf="email.errors.email">
            Not a valid e-mail format.
          </div>
        </div>
        <div *ngIf="emailTaken && newEmail===invalidEmail" class="alert alert-danger">
          Sorry, the email is already taken.
        </div>

        <div class="form-group">
          <label for="oldPassword">Enter your old password</label> <input type="password" class="form-control" id="oldPassword"
                                                                          formControlName="oldPassword">
        </div>

        <div class="form-group">
          <label for="password">Enter your new password</label> <input type="password" class="form-control" id="password"
                                                                       formControlName="password">
        </div>
        <div *ngIf="password.invalid && (password.dirty || password.touched)" class="alert alert-danger">
          <div *ngIf="password.errors.pattern">
            The password must be at least 8 characters long and contain uppercase(s), lowercase(s) and at least one special
            character or numeral.
          </div>
        </div>
      </form>
    </div>
    <div class="row modal-footer">
      <div class="col">
        <button type="reset" (click)="revert()" [disabled]="userForm.pristine" class="btn btn-danger"
                style="float:left">Reset
        </button>
      </div>
      <div class="col">
        <button type="button" (click)="onSubmit()" routerLink="/nav" [disabled]="userForm.invalid"
                class="btn btn-success" style="float:right">Save
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Input() id;
  @Input() oldName;
  @Input() oldGender;
  @Input() oldEmail;
  @Input() birth;
  @Input() newPassword;
  @Input() avatar;

  userForm: FormGroup;
  userEdited: User;
  emailTaken = false;
  invalidEmail = '';
  newEmail;

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal,
              private userService: UserManagementService) {
    this.createForm();
  }

  ngOnInit() {
    this.revert();
    this.newEmail = this.oldEmail;
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      oldPassword: [],
      password: ['', [Validators.pattern
      (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
    });
  }

  revert() {
    this.userForm.reset({
      name: this.oldName,
      gender: this.oldGender,
      email: this.oldEmail,
      oldPassword: '',
      password: ''
    });
  }

  onSubmit() {
    const formModel = this.userForm.value;
    const oldP = formModel.oldPassword as string;
    if (oldP.trim().length > 0) {
      const newP = formModel.password as string;
      if (oldP === this.newPassword && newP.trim().length > 0) {
        this.newPassword = newP; // the new password will be saved only if the old one is correct and if the length is not 0.
      }
    }
    const updatedUser = new User(
      formModel.name as string,
      formModel.gender as string,
      formModel.email as string,
      this.birth,
      this.newPassword);
    updatedUser.setAvatar(this.avatar); // for avatar -> Upload button, when using check if it is not available, then use the default
    updatedUser.setId(this.id);
    this.userService.editUser(updatedUser).subscribe(user => {
      if (user != null) {
        this.userEdited = user;
        this.userService.profileDataChanged(this.userEdited);
        this.activeModal.close();
      } else {
        this.emailTaken = true;
        this.invalidEmail = formModel.email as string;
      }
    });
  }

  get name() {
    return this.userForm.get('name');
  }

  get gender() {
    return this.userForm.get('gender');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get oldPassword() {
    return this.userForm.get('oldPassword');
  }
}
