import { TestBed, inject } from '@angular/core/testing';

import { TermDepositsService } from './term-deposits.service';

describe('TermDepositsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermDepositsService]
    });
  });

  it('should be created', inject([TermDepositsService], (service: TermDepositsService) => {
    expect(service).toBeTruthy();
  }));
});
