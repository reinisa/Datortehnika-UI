import { TestBed } from '@angular/core/testing';

import { PieprasijumsService } from './pieprasijums.service';

describe('PieprasijumsService', () => {
  let service: PieprasijumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieprasijumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
