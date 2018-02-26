import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user';
import {Tweet} from '../model/tweet';
import {UserManagementService} from '../user-management.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TweetManagementService} from '../tweet-management.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  id: number;
  tweets: Tweet[];
  currentUser: User;
  authenticatedUser: User;
  currentRate: number;
  liked = false;

  @Output() totalRate: string;

  constructor(private route: ActivatedRoute,
              private modalService: NgbModal,
              private userService: UserManagementService,
              private tweetService: TweetManagementService) {
    userService.rateUser$.subscribe(user => {
      this.currentUser = user;
      this.setRating();
    });
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(user => {
      this.authenticatedUser = user;
    });
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.userService.getUserById(this.id).subscribe(user => {
        this.currentUser = user;
        this.setInitialCurrentRate();
        this.setRating();
        this.tweetService.getTweetsByAuthor(this.currentUser.id).subscribe(tweets => this.tweets = tweets);
      });
    });
  }

  logOut() {
    localStorage['authUserId'] = -1;
  }

  setInitialCurrentRate() {
    if (this.currentUser.rating.length === 0) {
      this.currentRate = 0;
    } else {
      let sum = 0;
      this.currentUser.rating.forEach(value => sum += value);
      this.currentRate = sum / this.currentUser.rating.length;
    }
  }

  setRating() {
    if (this.currentUser.rating.length === 0) {
      this.totalRate = '0';
    } else {
      let sum = 0;
      this.currentUser.rating.forEach(value => sum += value);
      this.totalRate = (sum / this.currentUser.rating.length).toFixed(2);
    }
  }

  rateUser(event) {
    this.userService.rateUser(this.currentUser.id, this.authenticatedUser.id, event).subscribe(user => {
      this.userService.userRated(user);
    });
  }
}
