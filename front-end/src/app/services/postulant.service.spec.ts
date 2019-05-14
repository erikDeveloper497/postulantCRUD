import { TestBed } from '@angular/core/testing';

import { PostulantService } from './postulant.service';

describe('PostulantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostulantService = TestBed.get(PostulantService);
    expect(service).toBeTruthy();
  });
});
