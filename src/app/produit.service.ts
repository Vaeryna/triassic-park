import { Injectable } from '@angular/core';
import { Dinosaure } from './data/dinosaures';
import { DINO, TYPE } from './data/dino-mock';
import { PANIER } from './data/panier-mock';
import { TypeDino } from './data/types';
import { Panier } from './data/panier';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private dino: Dinosaure[] = DINO;
  private type: TypeDino[] = TYPE;
  private panier: Panier[] = PANIER;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  private dinoUrl = 'https://triassic-park-default-rtdb.firebaseio.com/';

  getType(): TypeDino[] {
    return this.type;
  }

  getDinoType(type: string): Dinosaure[] {
    const dinoType = this.dino.filter((a) => a.type == type)!;
    console.log('dinoType ', dinoType);
    return dinoType;
  }

  getDino(): Observable<Dinosaure[]> {
    return this.http.get<Dinosaure[]>(this.dinoUrl + '/.json').pipe(
      map((dinosaures) => Object.values(dinosaures)),
      map((a) => {
        return a;
      })
    );
  }

  getOneDino(id: string): Dinosaure {
    const dino = this.dino.find((a) => a.id == id)!;
    return dino;
  }

  getPanier(): Panier[] {
    const panierValues = Object.values(this.panier);

    console.log('panier2', panierValues);
    return panierValues;
  }
}
