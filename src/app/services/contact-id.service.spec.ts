import { TestBed } from '@angular/core/testing';

import { ContactIdService } from './contact-id.service';

describe('ContactIdService', () => {
  let service: ContactIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
