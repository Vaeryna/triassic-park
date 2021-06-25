import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { AuthService } from '../auth.service';
import firebase from 'firebase/app';

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
import { ProduitBDDService } from '../produit-bdd.service';

@Component({
  selector: 'app-lien-bdd-auth',
  templateUrl: './lien-bdd-auth.component.html',
  styleUrls: ['./lien-bdd-auth.component.scss'],
})
export class LienBddAuthComponent implements OnInit {
  mail!: string;
  userForm!: FormGroup;
  client!: Client;
  uid!: string;
  password = sessionStorage.getItem('password');

  constructor(
    private router: ActivatedRoute,
    private fB: FormBuilder,
    private pS: ProduitService,
    private auS: AuthService,
    private route: Router,
    private pB: ProduitBDDService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    const mail = this.router.snapshot.paramMap.get('mail');

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid;
      }

      if (mail) {
        this.mail = mail;

        this.userForm = new FormGroup({
          lastname: new FormControl('', Validators.required),
          firstname: new FormControl('', Validators.required),
          mail: new FormControl(this.mail, Validators.required),
          address: new FormControl('', Validators.required),
          city: new FormControl('', Validators.required),
          uid: new FormControl(this.uid, Validators.required),
          mdp: new FormControl(this.password, Validators.required),
        });
      }
    });
  }

  onSubmit() {
    const client = this.userForm.value;
    console.log('value', this.userForm.value);

    console.log('form mail: ', client.mail, 'form mpd: ', client.pasdword);

    this.pB.addClientBDD(client).subscribe(() => this.route.navigate(['']));
  }
}
