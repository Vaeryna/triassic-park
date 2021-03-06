import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';

import { ProduitService } from '../../app/services/produit.service';

import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  mail!: string;

  constructor(
    private route: Router,
    private auS: AuthService,
    private pS: ProduitService
  ) {}
  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log('form mail: ', form.value.mail, 'mdp: ', form.value.password);
    const mail = form.value.mail;
    const password = form.value.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log('user', user);
        sessionStorage.setItem('mail', mail);

        if (mail == 'admin@mail.fr') this.route.navigate([`/admin`]);
        else {
          this.route.navigate([`/dashboard/${mail}`]);
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        this.route.navigate([`/newLog`]);
      });
  }
}
