import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {UserManagementService} from '../user-management.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: NgbDateStruct;
  emails: string[];
  noUserFound = false;

  constructor(private userService: UserManagementService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getAllUsersEmails(localStorage['authUserId'] as number).subscribe(emails => this.emails = emails);
  }

  onSubmit() {
    this.userService.getUserByEmail(this.model)
      .subscribe(id => {
        if (id === -1) {
          this.noUserFound = true;
        } else {
          this.router.navigate(['/profile/' + id]);
        }
      });
  }

  logOut() {
    localStorage['authUserId'] = -1;
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.emails.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
}
