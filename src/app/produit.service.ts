import { ErrorHandler, Injectable } from '@angular/core';
import { Panier, Total } from './data/panier';
import { Rayon, Produit } from './data/produit';
import { RAYON } from './data/types';

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
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  private produitUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Produit';
  private panierUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Panier';

  private rayonUrl = 'https://triassic-park-default-rtdb.firebaseio.com/Rayon';

  getRayon(): Observable<Rayon[]> {
    return this.http.get<Rayon[]>(`${this.rayonUrl}/.json`).pipe(
      map((rayon) => Object.values(rayon)),
      map((a) => {
        return a;
      })
    );
  }

  getProductRayon(rayon: string): Observable<Produit[]> {
    console.log('rayon: ', rayon);
    return this.http
      .get<Produit[]>(`${this.produitUrl}/.json`)
      .pipe(
        map(
          (produit) =>
            Object.values(produit).filter((produit) => produit.rayon == rayon),
          console.log('trrre')
        )
      );
  }

  getProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.produitUrl}/.json`).pipe(
      map((produits) => Object.values(produits)),
      map((a) => {
        return a;
      })
    );
  }

  getOneProduit(id: string): Observable<Produit> {
    console.log('getOneDino', id);
    return this.http.get<Produit>(`${this.produitUrl}/${id}/.json`).pipe(
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

  addProduit(produit: string): Observable<any> {
    console.log('produit addDino: ', produit);
    const ifExist = this.http.get<Panier>(`${this.panierUrl}/.json`).pipe(
      map((a) => {
        console.log('addDino: ', a);
      })
    );
    return this.http.post<Panier>(`${this.panierUrl}/.json`, produit);
  }

  priceProduitBasket(): Observable<Total> {
    return this.http.get<Total>(`${this.panierUrl}/TotalPrice/.json`).pipe(
      map((a) => {
        console.log('getTotalPricePanier: ', a);
        return a;
      })
    );
  }

  getProduitPrice(name: string): any {
    console.log('Product Price name:', name);

    const produitConst = this.http
      .get<Produit[]>(`${this.produitUrl}/.json`)
      .pipe(
        map((produit) => {
          Object.values(produit).filter((produit) => produit.name == name);
        }, name)
      );

    console.log('produit const', produitConst);

    /*  return this.http.get<Produit[]>(`${this.produitUrl}/.json`).pipe(
      map((produit) => {
        Object.values(produit).filter((produit) => produit.name == panier.name),
          map((a) => );
        console.log('getDinoPrice name :', Object.values(produit));)
      })*/
  }
}
