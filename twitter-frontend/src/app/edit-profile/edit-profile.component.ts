import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  /* template: `
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
   `, */
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  /* @Input() id;
  @Input() name;
  @Input() gender;
  @Input() email;
  @Input() birth;
  @Input() oldPassword;
  password = '';
  @Input() newPassword;
  @Input() avatar; */
  id = 1;
  oldName = 'Dajana';
  oldGender = 'f';
  oldEmail = 'dajana.sk@hotmail.com';
  birth = new Date(); // temporary, delete na kraj
  newPassword = 'DajanaS123';
  oldAvatar = '../../assets/img/avatar-female.png';

  userForm: FormGroup;

  constructor(private fb: FormBuilder, // public activeModal: NgbActiveModal,
              private userService: UserManagementService, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.revert();
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
    updatedUser.setAvatar(this.oldAvatar); // for avatar -> Upload button, when using check if it is not available, then use the default
    updatedUser.setId(this.id);
    this.userService.editUser(updatedUser).subscribe(/* */);
    // this.activeModal.close();
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
