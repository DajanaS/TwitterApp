import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserManagementService} from '../user-management.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFail = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private userService: UserManagementService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const formModel = this.loginForm.value;
    const email = formModel.email as string;
    const password = formModel.password as string;
    this.userService.authenticateUser(email, password)
      .subscribe(response => console.log('====== RESPONSE =====' + JSON.stringify(response)));
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
