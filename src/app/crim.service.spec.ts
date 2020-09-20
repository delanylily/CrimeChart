import { TestBed } from '@angular/core/testing';

import { CrimService } from './crim.service';

describe('CrimService', () => {
  let service: CrimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
