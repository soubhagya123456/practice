import { TestBed } from '@angular/core/testing';

import { SoubhagyaService } from './soubhagya.service';

describe('SoubhagyaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoubhagyaService = TestBed.get(SoubhagyaService);
    expect(service).toBeTruthy();
  });
});
