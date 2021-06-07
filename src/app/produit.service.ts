import { ErrorHandler, Injectable } from '@angular/core';
import { Client, Panier, Total } from './data/panier';
import { Rayon, Produit } from './data/produit';

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

  private globalUrl = 'https://triassic-park-default-rtdb.firebaseio.com';
  private produitUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Produit';
  private panierUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Panier';

  private rayonUrl = 'https://triassic-park-default-rtdb.firebaseio.com/Rayon';

  private clientUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Client';

  getRayon(): Observable<Rayon[]> {
    return this.http.get<Rayon[]>(`${this.rayonUrl}/.json`).pipe(
      map((rayon) => Object.values(rayon)),
      map((a) => {
        return a;
      })
    );
  }

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.clientUrl}/.json`).pipe(
      map(
        (client) => Object.values(client),
        map((a) => {
          return a;
        })
      )
    );
  }

  getProductRayon(rayon: string): Observable<Produit[]> {
    console.log('rayon: ', rayon);
    return this.http
      .get<Produit[]>(`${this.produitUrl}/.json`)
      .pipe(
        map((produit) =>
          Object.values(produit).filter((produit) => produit.rayon == rayon)
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

  getTotalPricePanier(): Observable<Panier> {
    return this.http.get<Panier>(`${this.panierUrl}/.json`).pipe(
      map((a) => {
        Object.values(a);
        console.log('getTotalPricePanier ', a.prix_HT);
        return a;
      })
    );
  }

  addProduit(produitName: Produit): Observable<any> {
    console.log('produit addDino: ', produitName.name);
    return this.http.post<Panier>(`${this.panierUrl}/.json`, produitName);
  }

  addClient(client: Client): Observable<any> {
    console.log('produit addclient: ', client);
    return this.http.post<Client>(`${this.clientUrl}/.json`, client);
  }

  priceProduitBasket(): Observable<Total> {
    return this.http.get<Total>(`${this.panierUrl}/TotalPrice/.json`).pipe(
      map((a) => {
        console.log('getTotalPricePanier: ', a);
        return a;
      })
    );
  }

  getProduitPrice(element: any): Observable<any> {
    return this.http
      .get<Panier[]>(`${this.panierUrl}/.json`)
      .pipe(
        map((a) => Object.values(a).find((produit) => produit.name == element))
      );
  }

  addPanierPrice(price: number): Observable<any> {
    console.log('add panier price: ', price);
    return this.http.post<number>(`${this.globalUrl}/.json`, price).pipe(
      switchMap(() => {
        return this.http.put<any>(`${this.globalUrl}/Total/.json`, price);
      })
    );
  }
}

// https://triassic-park-default-rtdb.firebaseio.com/Panier/.json?orderBy=%22name%22&equalTo=%22Jeans%20bleu%20clair%22
