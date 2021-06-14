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
  NgForm,
} from '@angular/forms';

import { Produit } from '../data/produit';
import { Client } from '../data/panier';
import { AuthService } from '../auth.service';
import { catchError, filter, find, map, switchMap } from 'rxjs/operators';
import firebase from 'firebase/app';
import { formatCurrency } from '@angular/common';

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
  clientele!: Client;
  keyClient!: string;
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
    const id = this.route.snapshot.paramMap.get('name');
    if (id)
      this.pS.getOneProduit(id).subscribe((produit) => {
        this.prod = produit;
        this.produitForm.patchValue(produit);
      });
  }

  initForm() {
    this.produitForm = this.fB.group({
      name: new FormControl(
        '',
        Validators.required // pour définir dans le controle un champ requis
      ),
      quantite: '',
      prix_HT: new FormControl('', Validators.required),
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

  onSubmit() {
    console.log('dinoFormValue', this.produitForm.value);
    const produit = this.produitForm.value;
    this.pS.addProduit(produit).subscribe(() => {
      this.router.navigate(['/catalogue']);
    });
  }

  fonction() {
    /*  firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        this.uid = user.uid;
        console.log('user co: ', this.uid);
        this.pS.getClient('uid', this.uid).subscribe((a) => {
          console.log('uid ok', a);
          this.client = a;

          console.log('thisclient firebaseAuth', this.client);



          this.pS.getClient('uid', this.uid).subscribe((client) => {
            this.client = client;

            console.log('client getClient: ', this.client);
            this.mail = 'p.gaulois@mail.uk';

            this.pS.getClientId(this.mail).subscribe((id) => {
              console.log('mail: ', this.mail, 'id', id);
              this.keyClient = id;
              //    this.produitForm.patchValue(this.keyClient);
              console.log('keyClient', this.keyClient);
            });
          });
        });
        console.log('firebaseAuth', this.client);

        // ...
      } else {
        // User is signed out
        // ...
        this.uid = '';
        console.log('no user connected', "'", this.uid, "'");
      }
    });
  } */
  }
}
