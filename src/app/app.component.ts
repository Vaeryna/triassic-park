import { Component, OnInit } from '@angular/core';
import { Panier, Total } from './data/panier';
import { Rayon, Produit } from './data/produit';
import { ProduitService } from './produit.service';

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

  totalPrice: number = 0;
  price!: number;

  ngOnInit(): void {
    console.log('chargé ');
    this.pS.getRayon().subscribe((a) => {
      this.rayon = a;
    });

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
  }
}
