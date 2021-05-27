import { Injectable } from '@angular/core';
import { Dinosaure } from './data/dinosaures';
import { TYPE } from './data/dino-mock';

import { TypeDino } from './data/types';
import { Panier } from './data/panier';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, find, map, switchMap } from 'rxjs/operators';
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
  private dino!: Dinosaure[];
  private type: TypeDino[] = TYPE;
  private panier!: Panier[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  private dinoUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Dinosaures';
  private panierUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Panier';

  getType(): TypeDino[] {
    return this.type;
  }

  getDinoType(type: string): Observable<Dinosaure[]> {
    /*  const dinoType = this.dino.filter((a) => a.type == type)!;
    console.log('dinoType ', dinoType);
    return dinoType; */

    return this.http
      .get<Dinosaure[]>(`${this.dinoUrl}/.json`)
      .pipe(
        map((dino) => Object.values(dino).filter((dino) => dino.type == type))
      );
  }

  getDino(): Observable<Dinosaure[]> {
    return this.http.get<Dinosaure[]>(`${this.dinoUrl}/.json`).pipe(
      map((dinosaures) => Object.values(dinosaures)),
      map((a) => {
        return a;
      })
    );
  }

  getOneDino(id: string): Observable<Dinosaure> {
    console.log('getOneDino', id);
    return this.http.get<Dinosaure>(`${this.dinoUrl}/Dino${id}/.json`).pipe(
      map((a) => {
        return a;
      })
    );
  }

  getPanier(): Observable<Panier[]> {
    return this.http.get<Panier>(`${this.panierUrl}/.json`).pipe(
      map((panier) => Object.values(panier)),
      map((a) => {
        return a;
      })
    );
  }
}
