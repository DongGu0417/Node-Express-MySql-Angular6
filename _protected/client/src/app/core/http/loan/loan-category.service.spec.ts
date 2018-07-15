import { TestBed, inject } from '@angular/core/testing';

import { LoanCategoryService } from './loan-category.service';

describe('LoanCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanCategoryService]
    });
  });

  it('should be created', inject([LoanCategoryService], (service: LoanCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
