import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TweetManagementService} from '../tweet-management.service';
import {Tweet} from '../model/tweet';

@Component({
  selector: 'app-publish-tweet',
  template: `
    <div (keydown.enter)="onSubmit()">
      <div class="modal-header">
        <h4 class="modal-title">Tweet a new message as {{name}}</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <textarea [(ngModel)]="value" class="form-control" id="tweet" placeholder="Enter your text here"
                ngModel appAutofocus required></textarea>
      </div>
      <div class="modal-footer">
        <button *ngIf="value.trim()!==''" type="submit" (click)="onSubmit()" class="btn btn-primary">Publish</button>
        <button *ngIf="value.trim()===''" class="btn btn-primary" disabled>Publish</button>
      </div>
    </div>
  `,
  styleUrls: ['./publish-tweet.component.css']
})
export class PublishTweetComponent implements OnInit {
  @Input() name;
  value = '';
  tweet: Tweet;

  constructor(public activeModal: NgbActiveModal,
              private tweetService: TweetManagementService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.value.trim() !== '') {
      this.tweetService.addTweet(this.value).subscribe(tweet => {
        this.tweet = tweet;
        this.tweet.author = this.name;
        this.tweetService.newTweetPublished(this.tweet);
      });
      this.activeModal.close();
    }
  }
}
