import { TestBed } from '@angular/core/testing';

import { CampaignIdService } from './campaign-id.service';

describe('CampaignIdService', () => {
  let service: CampaignIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
