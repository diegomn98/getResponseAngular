import { TestBed } from '@angular/core/testing';

import { GetContactoService } from './get-contacto.service';

describe('GetContactoService', () => {
  let service: GetContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
