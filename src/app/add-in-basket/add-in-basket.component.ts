import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { ActivatedRoute, Router } from '@angular/router';

import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

import { Produit } from '../data/produit';
import { Client } from '../data/panier';
import { AuthService } from '../auth.service';
import { catchError, filter, find, map, switchMap } from 'rxjs/operators';
import firebase from 'firebase/app';

@Component({
  selector: 'app-add-in-basket',
  templateUrl: './add-in-basket.component.html',
  styleUrls: ['./add-in-basket.component.scss'],
})
export class AddInBasketComponent implements OnInit {
  produitForm!: FormGroup;
  prod!: Produit;
  uid!: string;
  client!: Client[];
  clientID!: string;
  mail!: string;

  constructor(
    private pS: ProduitService,
    private fB: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auS: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    const id = this.route.snapshot.paramMap.get('name');

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.uid = user.uid;
        console.log('user co: ', this.uid);
        this.pS.getClient('uid', this.uid).subscribe((a) => {
          console.log('uid ok', a);
          this.client = a;

          console.log('thisclient firebaseAuth', this.client);

          if (id)
            this.pS.getOneProduit(id).subscribe((produit) => {
              this.prod = produit;
              this.produitForm.patchValue(produit);
            });

          this.pS.getClient('uid', this.uid).subscribe((client) => {
            this.client = client;
            console.log('client getClient: ', this.client);

            this.pS.getClientId(this.mail).subscribe((id) => {
              console.log('mail: ', this.mail, 'id', id);
              this.clientID = id;
              this.produitForm.patchValue(this.clientID);
            });
          });
          console.log('firebaseAuth', this.clientID);
        });

        // ...
      } else {
        // User is signed out
        // ...
        this.uid = '';
        console.log('no user connected', "'", this.uid, "'");
      }
    });

    console.log('initForm', this.clientID);
    this.produitForm = this.fB.group({
      name: new FormControl(
        '',
        Validators.required // pour définir dans le controle un champ requis
      ),
      quantite: '',
      prix_HT: new FormControl('', Validators.required),
      keyClient: new FormControl('', Validators.required),
    });
  }

  get quantite() {
    return this.produitForm.get('quantite');
  }

  get produit() {
    return this.produitForm.get('produit');
  }
  get prix_u() {
    return this.produitForm.get('prix_HT');
  }

  get keyClient() {
    return this.produitForm.get('keyClient');
  }

  onSubmit() {
    console.log('dinoFormValue', this.produitForm.value);
    const produit = this.produitForm.value;
    this.pS.addProduit(produit).subscribe(() => {
      this.router.navigate(['/catalogue']);
    });
  }
}
