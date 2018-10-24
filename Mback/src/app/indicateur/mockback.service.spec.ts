import { TestBed, inject } from '@angular/core/testing';

import { MockbackService } from './mockback.service';

describe('MockbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockbackService]
    });
  });

  it('should be created', inject([MockbackService], (service: MockbackService) => {
    expect(service).toBeTruthy();
  }));
});
