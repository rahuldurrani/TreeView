import { TestBed, inject } from '@angular/core/testing';

import { RulesServiceService } from './rules-service.service';

describe('RulesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RulesServiceService]
    });
  });

  it('should be created', inject([RulesServiceService], (service: RulesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
