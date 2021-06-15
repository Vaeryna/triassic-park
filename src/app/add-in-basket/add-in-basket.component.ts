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
import { Client, Panier } from '../data/panier';
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
  keyClient!: string;
  id!: string;
  panier!: Panier | null;
  exQuantite!: number;
  newQuantite!: number;

  constructor(
    private pS: ProduitService,
    private fB: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auS: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('name');
    this.id = id!;

    if (id)
      this.pS.getOneProduit(id).subscribe((produit) => {
        this.prod = produit;
        console.log('this.prod', this.prod);
        this.produitForm.patchValue(produit);
      });
    this.initForm();
  }

  initForm() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.keyClient = user.email!;
      }

      this.pS.filterPanier(this.id, this.keyClient).subscribe((panier) => {
        if (panier) {
          this.panier = panier;
          this.exQuantite = panier.quantite;
          console.log('exxxx', this.exQuantite);
        }

        console.log('panier piano', this.panier);
      });

      this.produitForm = this.fB.group({
        id: new FormControl('', Validators.required),
        name: new FormControl(
          '',
          Validators.required // pour définir dans le controle un champ requis
        ),
        quantite: new FormControl('', Validators.required),
        prix_HT: new FormControl('', Validators.required),
        keyClient: new FormControl(this.keyClient, Validators.required),
      });
    });
  }

  // get quantite() {

  //  return this.produitForm.get('quantite');
  // }

  get produit() {
    return this.produitForm.get('produit');
  }
  get prix_u() {
    return this.produitForm.get('prix_HT');
  }

  onSubmit() {
    console.log('dinoFormValue', this.produitForm.value);
    const produit = this.produitForm.value;

    this.newQuantite = produit.quantite;
    console.log(
      'newQ',
      produit.quantite,
      'oldQ',
      this.exQuantite,
      'sum',
      this.newQuantite + this.exQuantite
    );

    if (this.exQuantite == undefined) {
      this.pS.addProduit(produit).subscribe(() => {
        //    this.router.navigate(['/catalogue']);
        console.log('addProduct ok', produit);
      });
    } else {
      console.log('boucle else');

      const quantite = { quantite: this.newQuantite + this.exQuantite };

      this.produitForm.patchValue(quantite);
      const produit2 = this.produitForm.value;
      this.pS.addProduitQte(this.keyClient, produit2).subscribe(() => {
        console.log('produit else', produit2);
      });
    }
  }
  //  window.location.reload();
}
