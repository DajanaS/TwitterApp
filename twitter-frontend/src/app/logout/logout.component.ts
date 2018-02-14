import {Component, OnInit} from '@angular/core';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  private user: User;
  private success = false;
  private email = '';

  constructor(private userService: UserManagementService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
      this.email = this.user.email;
      this.userService.logOutUser(this.email).subscribe(response => {
        this.success = response;
        if (this.success) {
          this.router.navigate(['/login']);
        }
      });
    });
  }
}
