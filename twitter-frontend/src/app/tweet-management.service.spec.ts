import { TestBed, inject } from '@angular/core/testing';

import { TweetManagementService } from './tweet-management.service';

describe('TweetManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetManagementService]
    });
  });

  it('should be created', inject([TweetManagementService], (service: TweetManagementService) => {
    expect(service).toBeTruthy();
  }));
});
