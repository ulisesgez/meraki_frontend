import { TestBed } from '@angular/core/testing';

import { ApiClientsSearchMacService } from './api-clients-search-mac.service';

describe('ApiClientsSearchMacService', () => {
  let service: ApiClientsSearchMacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiClientsSearchMacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
