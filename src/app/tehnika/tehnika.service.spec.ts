import { TestBed } from '@angular/core/testing';

import { TehnikaService } from './tehnika.service';

describe('TehnikaService', () => {
  let service: TehnikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TehnikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
