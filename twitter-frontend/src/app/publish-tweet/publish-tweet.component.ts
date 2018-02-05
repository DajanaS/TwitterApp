import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
      <textarea [(ngModel)]="value" class="form-control" id="tweet" placeholder="Enter your text here" required></textarea>
    </div>
    <div class="modal-footer">
      <button *ngIf="value" type="submit" (click)="onSubmit()" routerLink="/nav" class="btn btn-primary">Publish</button>
      <button *ngIf="value===''" class="btn btn-primary" disabled>Publish</button>
    </div>
  `,
  styleUrls: ['./publish-tweet.component.css']
})
export class PublishTweetComponent implements OnInit {

  @Input() name;
  value = '';

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.value = (<HTMLInputElement>document.getElementById('tweet')).value;
    console.log(this.value);
    this.activeModal.close();
  }

}
