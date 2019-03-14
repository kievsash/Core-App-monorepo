import { TestBed } from '@angular/core/testing';

import { AdminLibService } from './admin-lib.service';

describe('AdminLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminLibService = TestBed.get(AdminLibService);
    expect(service).toBeTruthy();
  });
});
