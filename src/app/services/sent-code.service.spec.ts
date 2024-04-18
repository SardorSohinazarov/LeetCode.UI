import { TestBed } from '@angular/core/testing';

import { SentCodeService } from './sent-code.service';

describe('SentCodeService', () => {
  let service: SentCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
