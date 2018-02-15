import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TweetManagementService} from '../tweet-management.service';
import {Tweet} from '../model/tweet';
import {Router} from '@angular/router';

@Component({
  selector: 'app-publish-tweet',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Tweet a new message as {{name}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <textarea [(ngModel)]="value" class="form-control" id="tweet" placeholder="Enter your text here" (keyup.enter)="onSubmit()"
                ngModel appAutofocus required></textarea>
    </div>
    <div class="modal-footer">
      <button *ngIf="value" type="button" (click)="onSubmit()" class="btn btn-primary">Publish</button>
      <button *ngIf="value===''" class="btn btn-primary" disabled>Publish</button>
    </div>
  `,
  styleUrls: ['./publish-tweet.component.css']
})
export class PublishTweetComponent implements OnInit {
  @Input() name;
  value = '';
  tweet: Tweet;

  constructor(public activeModal: NgbActiveModal,
              private tweetService: TweetManagementService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.tweetService.addTweet(this.value).subscribe(tweet => {
      this.tweet = tweet;
      this.tweet.author = this.name;
      this.tweetService.newTweetPublished(this.tweet);
    });
    this.activeModal.close();
    this.router.navigate(['/nav']);
  }

}
