import { Component, OnInit } from '@angular/core';
import { Panier, Total } from '../data/panier';
import { ProduitService } from '../produit.service';
import { Produit } from '../data/produit';

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
      this.pS.getPanierClient(this.mail).subscribe((panier) => {
        this.panier = Object.values(panier);

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
