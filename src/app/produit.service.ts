import { Injectable } from '@angular/core';
import { Dinosaures } from './data/dinosaures';
import { DINO, TYPE } from './data/dino-mock';
import { Type } from './data/types';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private dino: Dinosaures[] = DINO;
  private type: Type[] = TYPE;

  constructor() {}

  getDino(): Dinosaures[] {
    console.log('getDino');
    return this.dino;
  }

  getType(): Type[] {
    console.log('type :', this.type);
    return this.type;
  }

  getOneDino(): void {
  console.log("getOneDino")

  }

  
}
