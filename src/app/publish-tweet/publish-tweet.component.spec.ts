import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTweetComponent } from './publish-tweet.component';

describe('PublishTweetComponent', () => {
  let component: PublishTweetComponent;
  let fixture: ComponentFixture<PublishTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
