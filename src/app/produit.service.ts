import { Injectable } from '@angular/core';
import { Dinosaure } from './data/dinosaures';
import { DINO, TYPE } from './data/dino-mock';
import { Type } from './data/types';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private dino: Dinosaure[] = DINO;
  private type: Type[] = TYPE;
  id:string = ""

  constructor() {}

  getDino(): Dinosaure[] {
    console.log('getDino');
    return this.dino;
  }

  getType(): Type[] {
    console.log('type :', this.type);
    return this.type;
  }

  getOneDino(id: string): Dinosaure {
    console.log('id DIno : ', id);
    const dino = this.dino.find((a) => a.id = id)!;
    return dino;
  }
}
