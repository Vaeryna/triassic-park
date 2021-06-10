import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client, Panier, Total } from './data/panier';
import { Rayon, Produit } from './data/produit';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';

import { ProduitService } from './produit.service';
import { Observable } from 'rxjs';
import { catchError, filter, find, map, switchMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authState: boolean = false;

  private globalUrl = 'https://triassic-park-default-rtdb.firebaseio.com';
  private produitUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Produit';
  private panierUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Panier';

  private rayonUrl = 'https://triassic-park-default-rtdb.firebaseio.com/Rayon';

  private clientUrl =
    'https://triassic-park-default-rtdb.firebaseio.com/Client';

  constructor(
    private route: Router,
    private pS: ProduitService,
    private http: HttpClient
  ) {
    firebase.auth().onAuthStateChanged((user) => {
      this._authState = user ? true : false;
    });
  }

  //#################  FIREBASE   ###################

  get authState() {
    return this._authState;
  }

  // méthode d'authentification firebase
  auth(mail: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(mail, password);
  }

  

  //new login firebase
  create(mail: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(mail, password);
  }

  logOut(): void {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.route.navigate(['']);
      });
  }

  currentUserObservable() {
    return firebase.auth();
  }

  //################# SANS FIREBASE  ##################

  getAuthToken(): string {
    const TOKEN = 'token-123456';
    return TOKEN;
  }

  //méthode verification client existe dans base
  authClient(mail: string, password: string): Observable<any> {
    console.log('mail', mail, 'password', password);

    return this.http
      .get<Client[]>(`${this.clientUrl}/.json?orderBy="mail"&equalTo="${mail}"`)
      .pipe(
        map((client) => console.log('authclient value', Object.values(client)))
      );
  }
}

