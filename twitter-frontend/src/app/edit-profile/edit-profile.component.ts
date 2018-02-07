import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserManagementService} from '../user-management.service';

@Component({
  selector: 'app-edit-profile',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edit profile {{name}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <textarea [(ngModel)]="value" class="form-control" id="tweet" placeholder="Enter your text here" required></textarea>
    </div>
    <div class="modal-footer">
      <button *ngIf="value" type="button" (click)="onSubmit()" routerLink="/nav" class="btn btn-primary">Publish</button>
      <button *ngIf="value===''" class="btn btn-primary" disabled>Publish</button>
    </div>
  `,
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  @Input() name;
  value = '';

  constructor(public activeModal: NgbActiveModal, private userService: UserManagementService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.value = (<HTMLInputElement>document.getElementById('tweet')).value;
    this.userService.editProfile(this.value).subscribe(/* */);
    this.activeModal.close();
  }

}
