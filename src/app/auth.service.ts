import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import { map } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authState: boolean = false;

  constructor(private route: Router) {
    firebase.auth().onAuthStateChanged((user) => {
      this._authState = user ? true : false;
    });
  }

  get authState() {
    return this._authState;
  }

  // méthode d'authentification firebase
  auth(mail: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(mail, password);
  }

  //méthode verification client existe dans base
  authClient(mail: string, password: string): void {
    console.log('mail', mail, 'password', password);
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
}
