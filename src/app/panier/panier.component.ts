import { Component, OnInit } from '@angular/core';
import { Panier, Total } from '../data/panier';
import { ProduitService } from '../produit.service';
import { Produit } from '../data/produit';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  panier!: Panier[];
  totalPrice: number = 0;
  produit!: Produit[];
  price!: number;
  mail = sessionStorage.getItem('mail');

  constructor(private pS: ProduitService) {}

  ngOnInit(): void {
    if (this.mail)
      /*  this.pS.getClientId(this.mail).subscribe((id) => {
          this.clientID = id; */
      this.pS.getPanierClient(this.mail).subscribe((panier) => {
        console.log('paneir', panier), (this.panier = Object.values(panier));
        console.log('undefinefd', this.panier);
        this.panier.forEach((element) => {
          console.log('element 0', element);
          this.pS.getProduitPrice(element.name).subscribe(() => {
            (this.price = element.prix_HT * element.quantite),
              (this.totalPrice = this.totalPrice + this.price);

          });
        });
      });
  }
}

/*     if (this.mail)
      this.pS.getPanierClient(this.mail).subscribe((a) => {
        this.panier = a;
        this.panier.forEach((element) => {
          this.pS.getProduitPrice(element.name).subscribe(() => {
            (this.price = element.prix_HT * element.quantite),
              (this.totalPrice = this.totalPrice + this.price);
          });
          this.pS.addPanierPrice(this.totalPrice).subscribe();
        });
      });
 */
//  this.pS.getTotalPricePanier().subscribe((a) => (this.totalPrice = a));

//e: questions$.do(questions => {questions.forEach(q => question here)})
