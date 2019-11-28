import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserManagementService} from './user-management.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userManagementService: UserManagementService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.userManagementService.getAuthenticatedUser().map(user => {
      let val = false;
      if (user !== null) {
        val = true;
      } else {
        this.router.navigate(['/login']);
      }
      return val;
    });
  }
}
