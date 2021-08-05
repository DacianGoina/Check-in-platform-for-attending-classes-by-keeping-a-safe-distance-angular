import { TestBed } from '@angular/core/testing';

import { RepartitionDTOService } from './repartition-dto.service';

describe('RepartitionDTOServiceService', () => {
  let service: RepartitionDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepartitionDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
