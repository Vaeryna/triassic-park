import { Component, OnInit } from '@angular/core';
import { Panier, Total, Client } from './data/panier';
import { Rayon, Produit } from './data/produit';
import { ProduitService } from './produit.service';
// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'commerce';

  constructor(private pS: ProduitService, private auS: AuthService) {}
  rayon!: Rayon[];
  panier!: Panier[];
  total!: Panier;
  client!: Client[];
  uid!: string;
  mail = sessionStorage.getItem('mail');

  totalPrice: number = 0;
  price!: number;

  ngOnInit(): void {
    this.pS.getRayon().subscribe((a) => {
      this.rayon = a;
    });

    this.pS.getPanier().subscribe((a) => {
      this.panier = a;
    });

    this.pS.getPanier().subscribe((a) => {
      this.panier = a;

      /*    this.panier.forEach((element) => {
          this.pS.getProduitPrice(element.name).subscribe(() => {
            (this.price = element.prix_HT * element.quantite),
              (this.totalPrice = this.totalPrice + this.price);
          });
        });
      });
*/
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.uid = user.uid;
          console.log('user co: ', this.uid);

          // ...
        } else {
          // User is signed out
          // ...
          this.uid = '';
          console.log('no user connected', "'", this.uid, "'");
        }
      });

      console.log('mail app: ', this.mail);
    });
  }

  logOut() {
    this.auS.logOut();
  }
}
