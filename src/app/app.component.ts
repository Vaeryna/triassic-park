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

  ngOnInit(): void {
    console.log('chargé ');
    this.pS.getRayon().subscribe((a) => {
      this.rayon = a;
    });

    this.pS.getPanier().subscribe((a) => {
      this.panier = a;
      console.log(this.panier);

    });

    this.pS.getTotalPricePanier().subscribe((a) => {
      this.total = a;
      console.log('total: ', a);
    });
  }
}
