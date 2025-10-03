import { TestBed } from '@angular/core/testing';

import { ReferenceCacheServiceService } from './reference-cache.service.service';

describe('ReferenceCacheServiceService', () => {
  let service: ReferenceCacheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferenceCacheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
