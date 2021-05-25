import { Injectable } from '@angular/core';
import { Dinosaure } from './data/dinosaures';
import { DINO, TYPE } from './data/dino-mock';
import { TypeDino } from './data/types';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private dino: Dinosaure[] = DINO;
  private type: TypeDino[] = TYPE;

  constructor() {}

  getType(): TypeDino[] {
    return this.type;
  }

  getDino(): Dinosaure[] {
    return this.dino;
  }

  getOneDino(id: string): Dinosaure {
    const dino = this.dino.find((a) => a.id == id)!;
    return dino;
  }

  getDinoType(type: string): Dinosaure[] {
    const dinoType = this.dino.filter((a) => a.type == type)!;
    console.log("dinoType ", dinoType)
    return dinoType;
  }
}
