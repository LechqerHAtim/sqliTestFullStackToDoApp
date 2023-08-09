import { TestBed } from '@angular/core/testing';

import { HandlRequetsService } from './handl-requets.service';

describe('HandlRequetsService', () => {
  let service: HandlRequetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlRequetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
