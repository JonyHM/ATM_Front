import { TestBed } from '@angular/core/testing';

import { AtmToolbarService } from './atm-toolbar.service';

describe('AtmToolbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtmToolbarService = TestBed.get(AtmToolbarService);
    expect(service).toBeTruthy();
  });
});
