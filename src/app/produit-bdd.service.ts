import { ErrorHandler, Injectable } from '@angular/core';
import { Client, Panier, Total } from './data/panier';
import { Rayon, Produit } from './data/produit';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, find, map, switchMap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProduitBDDService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  private clientUrl = '//localhost:8080/api/client';
  private productUrl = '//localhost:8080/api/product';

  //################  GESTION CLIENT ##############
  getAllClientBDD(): Observable<any> {
    return this.http.get(`${this.clientUrl}`).pipe(
      map(
        (client) => Object.values(client),
        map((a) => {
          return a;
        })
      )
    );
  }

  getClientBDD(id: Number): Observable<any> {
    return this.http.get(`${this.clientUrl}/${id}`).pipe(
      map((client) => {
        return client;
      })
    );
  }

  addClientBDD(client: Client): Observable<any> {
    console.log('produit addclient: ', client);
    return this.http.post(`${this.clientUrl}`, client);
  }

  deleteClientBDD(id: number): Observable<any> {
    console.log('delete: ', id);
    return this.http.delete(`${this.clientUrl}/${id}`);
  }

  //############# GESTION PRODUIT ##########
  addProductBDD(product: Produit): Observable<any> {
    console.log('produit add', product);
    return this.http.post(`${this.productUrl}`, product);
  }
}
