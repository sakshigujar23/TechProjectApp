import { TestBed } from '@angular/core/testing';

import { LoignService } from './login.service';

describe('LoignService', () => {
  let service: LoignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
