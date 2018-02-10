import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {UserManagementService} from './user-management.service';

@Injectable()
export class AuthGuard implements CanActivate {

  flag: boolean;

  constructor(private userManagementService: UserManagementService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.userManagementService.getAuthenticatedUser().subscribe(user => {
      if (user === null) {
        this.router.navigate(['/login']);
        console.log('Not logged in');
        this.flag = false;
      } else {
        console.log('Logged in');
        this.flag = true;
      }
    });
    return this.flag;
  }
}
