import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';

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

  // méthode d'authentification
  auth(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logOut(): void {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.route.navigate(['/albums']);
      });
  }

  currentUserObservable() {
    return firebase.auth();
  }
}
