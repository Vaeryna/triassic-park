import { Component, OnInit } from '@angular/core';
import { Panier, Total } from '../data/panier';
import { ProduitService } from '../produit.service';
import { Dinosaure } from '../data/dinosaures';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  panier!: Panier[];
  totalPrice!: Total;
  dino!: Dinosaure[];

  constructor(private pS: ProduitService) {}

  ngOnInit(): void {
    this.pS.getPanier().subscribe((a) => {
      this.panier = a;
      console.log(this.panier);
    });

    this.pS.getTotalPricePanier().subscribe((a) => {
      this.totalPrice = a;
      console.log('total: ', a);
    });


  }
}
