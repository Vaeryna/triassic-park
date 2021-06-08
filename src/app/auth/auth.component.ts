import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { map } from 'jquery';
import { AuthService } from '../auth.service';
import { GuardService } from '../guard.service';
import { ProduitService } from '../produit.service';

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

    /*  this.auS
      .auth(form.value.mail, form.value.password)
      .then((res) => this.route.navigate([`/dashboard/${mail}`]))
      .catch((err) => console.log('err', err)); */

    this.pS.getClient(mail).subscribe(() => {
      console.log('mail_getClient', mail, 'psw_getClient ', password);
      this.route.navigate([`/dashboard/${mail}`]);
    });
  }
}
