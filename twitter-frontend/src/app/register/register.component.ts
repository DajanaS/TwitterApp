import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  emailTaken = false;
  invalidEmail = '';
  newEmail = '';
  passwordModel = '';
  repeatPasswordModel = '';

  constructor(private fb: FormBuilder, private router: Router,
              private userService: UserManagementService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birth: ['', [Validators.required]], // Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)
      password: ['', [Validators.required, Validators.pattern
      (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      repeatPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const user = this.prepareSaveUser();
    this.userService.addUser(user)
      .subscribe(response => {
        this.emailTaken = response;
        if (this.emailTaken === false) {
          this.router.navigate(['/login']);
        } else {
          this.invalidEmail = user.email;
        }
      });
  }

  prepareSaveUser(): User {
    const formModel = this.userForm.value;
    return new User(
      formModel.name.trim() as string,
      formModel.gender as string,
      formModel.email.trim() as string,
      formModel.birth as Date,
      formModel.password as string
    );
  }

  revert() {
    this.userForm.reset({
      name: '',
      gender: '',
      email: '',
      birth: '',
      password: '',
      repeatPassword: ''
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

  get birth() {
    return this.userForm.get('birth');
  }

  get password() {
    return this.userForm.get('password');
  }

  get repeatPassword() {
    return this.userForm.get('repeatPassword');
  }
}
