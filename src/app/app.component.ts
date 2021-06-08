import { Component, OnInit } from '@angular/core';
import { Panier, Total, Client } from './data/panier';
import { Rayon, Produit } from './data/produit';
import { ProduitService } from './produit.service';

import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'commerce';

  constructor(private pS: ProduitService) {}
  rayon!: Rayon[];
  panier!: Panier[];
  total!: Panier;
  client!: Client[];

  totalPrice: number = 0;
  price!: number;

  ngOnInit(): void {
    console.log('chargé ');
    this.pS.getRayon().subscribe((a) => {
      this.rayon = a;
    });

 /*    this.pS.getClient().subscribe((a) => {
      this.client = a;
    }); */

    this.pS.getPanier().subscribe((a) => {
      this.panier = a;
      console.log(this.panier);
    });

    this.pS.getPanier().subscribe((a) => {
      this.panier = a;
      console.log('init panier', this.panier);
      this.panier.forEach((element) => {
        this.pS.getProduitPrice(element.name).subscribe(() => {
          (this.price = element.prix_HT * element.quantite),
            (this.totalPrice = this.totalPrice + this.price);
        });

        //    return this.pS.addPanierPrice(this.totalPrice);
      });
    });

    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
      ],
    });
  }
}
