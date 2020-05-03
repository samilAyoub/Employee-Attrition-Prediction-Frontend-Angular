import { TestBed, async, inject } from '@angular/core/testing';

import { PredictionDetailsGuard } from './prediction-details.guard';

describe('PredictionDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredictionDetailsGuard]
    });
  });

  it('should ...', inject([PredictionDetailsGuard], (guard: PredictionDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
