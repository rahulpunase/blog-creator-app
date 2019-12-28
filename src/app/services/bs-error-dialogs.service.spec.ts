import { TestBed } from '@angular/core/testing';

import { BsErrorDialogsService } from './bs-error-dialogs.service';

describe('BsErrorDialogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BsErrorDialogsService = TestBed.get(BsErrorDialogsService);
    expect(service).toBeTruthy();
  });
});
