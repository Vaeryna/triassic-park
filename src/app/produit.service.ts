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

  //######################## Gestion RAYON ############################
  getRayon(): Observable<Rayon[]> {
    return this.http.get<Rayon[]>(`${this.rayonUrl}/.json`).pipe(
      map((rayon) => Object.values(rayon)),
      map((a) => {
        return a;
      })
    );
  }

  //######################## Gestion CLIENT  ############################

  getClient(recherche: string, mail: string): Observable<Client[]> {
    return this.http
      .get<Client[]>(
        `${this.clientUrl}/.json?&orderBy="${recherche}"&equalTo="${mail}"`
      )
      .pipe(
        map(
          (client) => Object.values(client),
          map((a) => {
            return a;
          })
        )
      );
  }

  getAllClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.clientUrl}/.json`).pipe(
      map(
        (client) => Object.values(client),
        map((a) => {
          return a;
        })
      )
    );
  }

  getClientId(mail: string): Observable<string> {
    return this.http
      .get<Client>(`${this.clientUrl}/.json?orderBy="mail"&equalTo="${mail}"`)

      .pipe(
        map((client) => {
          return Object.keys(client).toString();
        })
      );
  }

  getClientMail(uid: string): Observable<Client> {
    return this.http
      .get<Client>(`${this.clientUrl}/.json?orderBy="uid"&equalTo="${uid}"`)
      .pipe(
        map((a) => {
          console.log('get Fonction', a);
          return a;
        })
      );
  }

  //######################## Gestion  PRODUITS ############################
  getProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.produitUrl}/.json`).pipe(
      map((produits) => Object.values(produits)),
      map((a) => {
        return a;
      })
    );
  }

  getOneProduit(id: string): Observable<Produit> {
    return this.http.get<Produit>(`${this.produitUrl}/${id}/.json`).pipe(
      map((a) => {
        return a;
      })
    );
  }

  getProductRayon(rayon: string): Observable<Produit[]> {
    return this.http
      .get<Produit[]>(`${this.produitUrl}/.json`)
      .pipe(
        map((produit) =>
          Object.values(produit).filter((produit) => produit.rayon == rayon)
        )
      );
  }

  //######################## Gestion PANIER ############################

  getPanier(): Observable<any> {
    return this.http.get<Panier>(`${this.panierUrl}/.json`).pipe(
      map((panier) => Object.values(panier)),
      map((a) => {
        return a;
      })
    );
  }

  getPanierClient(id: string): Observable<Panier[]> {
    return this.http
      .get<Panier[]>(
        `${this.panierUrl}/.json?orderBy="keyClient"&equalTo="${id}"`
      )
      .pipe(
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

  getProduitPrice(element: any): Observable<any> {
    return this.http
      .get<Panier[]>(`${this.panierUrl}/.json`)
      .pipe(
        map((a) => Object.values(a).find((produit) => produit.name == element))
      );
  }

  filterPanier(articleID: string, name: string): Observable<any> {
    return this.http
      .get<Panier>(
        `${this.panierUrl}/.json?&orderBy="id"&equalTo="${articleID}"`
      )
      .pipe(
        map((a) => Object.values(a).find((client) => client.keyClient == name))
      );
  }

  //######################## ADD ############################

  addProduit(produitName: Produit): Observable<any> {
    console.log('produit addDino: ', produitName.name);
    return this.http.post<Panier>(`${this.panierUrl}/.json`, produitName);
  }

  addProduitQte(mail: string, produit: Panier): Observable<any> {
    return this.http
      .get<Panier[]>(
        `${this.panierUrl}/.json?orderBy="keyClient"&equalTo="${mail}"`
      )
      .pipe(
        switchMap((a) => {
          const clef = Object.keys(a);
          console.log('key', clef);
          console.log('panieeer', produit);

          return this.http.put<any>(`${this.panierUrl}/${clef}/.json`, produit);
        })
      );
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
}

// https://triassic-park-default-rtdb.firebaseio.com/Panier/.json?orderBy=%22name%22&equalTo=%22Jeans%20bleu%20clair%22
