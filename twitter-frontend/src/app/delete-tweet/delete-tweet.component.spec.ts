import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteTweetComponent} from './delete-tweet.component';

describe('DeleteTweetComponent', () => {
  let component: DeleteTweetComponent;
  let fixture: ComponentFixture<DeleteTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTweetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
