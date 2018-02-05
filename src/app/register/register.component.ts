import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  model: NgbDateStruct;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private userService: UserManagementService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      birth: ['', [Validators.required]], // Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)
      password: ['', [Validators.required, Validators.pattern
      (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]
    });
  }

  onSubmit() {
    const user = this.prepareSaveUser();
    this.userService.addUser(user);
  }

  prepareSaveUser(): User {
    const formModel = this.userForm.value;
    return new User(
      formModel.name as string,
      formModel.gender as string,
      formModel.email as string,
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
      password: ''
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
}
