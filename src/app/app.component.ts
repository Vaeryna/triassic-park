import { Component, OnInit } from '@angular/core';
import { Panier, Total } from './data/panier';
import { TypeDino } from './data/types';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'commerce';

  constructor(private pS: ProduitService) {}
  dinotype: TypeDino[] = [];
  panier!: Panier[];
  total!: Total;

  ngOnInit(): void {
    console.log('chargé ');
    this.dinotype = this.pS.getType();
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
