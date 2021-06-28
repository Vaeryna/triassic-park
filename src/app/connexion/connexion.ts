import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  ValidatorFn,
  AbstractControl,
  NgForm,
  FormGroupDirective,
} from '@angular/forms';

import { Client } from '../data/panier';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.scss'],
})
export class CompteClientComponent implements OnInit {
  userForm!: FormGroup;
  client!: Client;
  password!: String;

  constructor(
    private fB: FormBuilder,
    private route: Router,
    private auS: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fB.group({
      mail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmitClient() {
    const form = this.userForm.value;
    console.log('value', this.userForm.value);

    console.log('form mail: ', form.mail, 'password: ', form.password);
    const mail = form.mail;
    sessionStorage.setItem('password', form.password);

    // creation client firebase
    this.auS
      .create(form.mail, form.password)
      .then((res) => {
        this.route.navigate([`/lien-bdd-auth/${mail}`]);
      })
      .catch((err) => console.log('err', err));
  }
}
