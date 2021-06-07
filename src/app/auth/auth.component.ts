import { Component, OnInit, Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  ValidatorFn,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  erreur = true;
  password = '';
  login = '';
  constructor(private router: Router) {}
  ngOnInit() {}

  isAuthenticated() {
   /*  firebase.auth().signInWithCustomToken(token)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }); */



    if (this.login === 'wick' && this.password === 'john') {
      localStorage.setItem('isConnected', 'true');
      this.router.navigateByUrl('/dashboard');
    } else {
      this.erreur = false;
      console.log('mauvais id');
    }
  }
}
