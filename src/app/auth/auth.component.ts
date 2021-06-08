import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
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
  constructor(private route: Router, private auS: AuthService) {}
  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log('form mail: ', form.value.mail, 'mpd: ', form.value.password);
    this.auS
      .auth(form.value.mail, form.value.password)
      .then((res) => this.route.navigate(['/dashboard']))
      .catch((err) => console.log('err', err));

  }
}
