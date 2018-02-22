import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserManagementService} from '../user-management.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFail = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private userService: UserManagementService, private router: Router) {
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
    this.userService.authenticateUser(email, password).subscribe(id => {
      if (id === -1) {
        this.loginFail = true;
      } else {
        this.loginFail = false;
        localStorage['authUserId'] = id as number;
        this.router.navigate(['/nav']);
      }
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
