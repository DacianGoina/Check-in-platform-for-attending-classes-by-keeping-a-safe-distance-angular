import { TestBed } from '@angular/core/testing';

import { ClassDTOService } from './class-dto.service';

describe('ClassDTOService', () => {
  let service: ClassDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
