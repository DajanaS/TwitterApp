import {inject, TestBed} from '@angular/core/testing';

import {LikeManagementService} from './like-management.service';

describe('LikeManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeManagementService]
    });
  });

  it('should be created', inject([LikeManagementService], (service: LikeManagementService) => {
    expect(service).toBeTruthy();
  }));
});
