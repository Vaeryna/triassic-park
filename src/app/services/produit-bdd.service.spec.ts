import { TestBed } from '@angular/core/testing';

import { ProduitBDDService } from './produit-bdd.service';

describe('ProduitBDDService', () => {
  let service: ProduitBDDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitBDDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
