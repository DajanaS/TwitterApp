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

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: NgbDateStruct;
  emails: string[];

  constructor(private userService: UserManagementService) {
  }

  ngOnInit() {
    this.userService.getAllUsersEmails().subscribe(emails => this.emails = emails);
  }

  onSubmit() {
    // search user and get one (his ID) by email, post req send 'model' as parameter
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.emails.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
}
