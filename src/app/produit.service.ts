import { ErrorHandler, Injectable } from '@angular/core';
import { Dinosaure } from './data/dinosaures';
import { TYPE } from './data/dino-mock';

import { TypeDino } from './data/types';
import { Panier, Total } from './data/panier';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, find, map, switchMap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private type: TypeDino[] = TYPE;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  private dinoUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Dinosaures';
  private panierUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Panier';

  getType(): TypeDino[] {
    return this.type;
  }

  getDinoType(type: string): Observable<Dinosaure[]> {
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

  getTotalPricePanier(): Observable<Total> {
    return this.http.get<Total>(`${this.panierUrl}/TotalPrice/.json`).pipe(
      map((a) => {
        console.log('getTotalPricePanier: ', a);
        return a;
      })
    );
  }

  addDino(dino: string): Observable<any> {
    console.log('dino addDino: ', dino);
    const ifExist = this.http.get<Panier>(`${this.panierUrl}/.json`).pipe(
      map((a) => {
        console.log('addDino: ', a);
      })
    );

    return this.http.post<Panier>(`${this.panierUrl}/.json`, dino);
  }
}
