import { TestBed } from '@angular/core/testing';

import { GenerateRespService } from './generate-resp.service';

describe('GenerateRespService', () => {
  let service: GenerateRespService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateRespService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
