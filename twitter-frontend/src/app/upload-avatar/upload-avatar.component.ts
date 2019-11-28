import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserManagementService} from '../user-management.service';
import {User} from '../model/user';

@Component({
  selector: 'app-upload-avatar',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Upload photo</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="avatar">Upload photo</label>
          <input type="file" id="avatar" accept="image/*" (change)="onFileChange($event)" #fileInput>
        </div>
        <div *ngIf="sizeExceeded" class="alert alert-danger">
          Sorry, you can not upload images larger than 3MB.
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button *ngIf="state && !sizeExceeded" type="button" (click)="onSubmit()" class="btn btn-primary">Upload</button>
      <button *ngIf="sizeExceeded || !state" class="btn btn-primary" disabled>Upload</button>
    </div>
  `,
  styleUrls: ['./upload-avatar.component.css']
})
export class UploadAvatarComponent implements OnInit {
  @Input() userId;
  form: FormGroup;
  user: User;

  @ViewChild('fileInput') fileInput: ElementRef;

  state = false;
  sizeExceeded = false;

  constructor(private fb: FormBuilder, private userService: UserManagementService, public activeModal: NgbActiveModal) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      avatar: null
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    this.state = event.target.value.length > 0;
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.size > 3145728) {
        this.sizeExceeded = true;
      } else {
        this.sizeExceeded = false;
      }
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          value: reader.result
        });
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.userService.updateAvatar(this.userId, formModel.avatar.value).subscribe(user => {
      this.user = user;
      this.userService.avatarUpdated(this.user);
      this.activeModal.close();
    });
  }
}
