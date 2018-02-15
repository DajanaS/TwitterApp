import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserManagementService} from '../user-management.service';

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
          <input type="file" id="avatar" (change)="onFileChange($event)" #fileInput>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button *ngIf="state" type="button" (click)="onSubmit()" class="btn btn-primary">Upload</button>
      <button *ngIf="state===false" class="btn btn-primary" disabled>Upload</button>
    </div>
  `,
  styleUrls: ['./upload-avatar.component.css']
})
export class UploadAvatarComponent implements OnInit {
  @Input() userId;
  form: FormGroup;

  @ViewChild('fileInput') fileInput: ElementRef;

  state = false;

  constructor(private fb: FormBuilder, private userService: UserManagementService, public activeModal: NgbActiveModal) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    this.state = event.target.value.length > 0;
    // console.dir(this.fileInput.nativeElement);
    // console.dir(this.fileInput.nativeElement.value);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('avatar', this.form.get('avatar').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.userService.updateAvatar(formModel).subscribe();
    this.activeModal.close();
    // this.router.navigate(['/nav']);
  }
}
