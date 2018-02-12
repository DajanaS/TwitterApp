import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user';
import {Tweet} from '../model/tweet';
import {UserManagementService} from '../user-management.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TweetManagementService} from '../tweet-management.service';

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
  currentRate = 5;
  liked = false;

  constructor(private route: ActivatedRoute, private modalService: NgbModal, private userService: UserManagementService,
              private tweetService: TweetManagementService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.userService.getUserById(this.id).subscribe(user => {
        this.currentUser = user;
        this.tweetService.getTweets(this.currentUser.id).subscribe(tweets => this.tweets = tweets);
      });
    });
  }

}
