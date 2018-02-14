import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TweetManagementService} from '../tweet-management.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-tweet',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Are you sure?</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to delete this tweet?</p>
    </div>
    <div class="row modal-footer">
      <div class="col">
        <button type="button" (click)="activeModal.dismiss('Cross click')" class="btn btn-light" style="float:left">Cancel</button>
      </div>
      <div class="col">
        <button type="button" (click)="yes()" class="btn btn-primary" style="float:right">Yes</button>
      </div>
    </div>
  `,
  styleUrls: ['./delete-tweet.component.css']
})
export class DeleteTweetComponent implements OnInit {
  @Input() tweetId;

  constructor(public activeModal: NgbActiveModal,
              private tweetService: TweetManagementService,
              private router: Router) {
  }

  ngOnInit() {
  }

  yes() {
    this.tweetService.deleteTweet(this.tweetId).subscribe(resp => {
      if (resp) {
        this.tweetService.tweetDeleted(this.tweetId);
      }
    });
    this.activeModal.close();
    this.router.navigate(['/nav']);
  }
}
