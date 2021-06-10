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

  constructor(private pS: ProduitService) {}

  ngOnInit(): void {
    this.pS.getPanier().subscribe((a) => {
      this.panier = a;
      this.panier.forEach((element) => {
        this.pS.getProduitPrice(element.name).subscribe(() => {
          (this.price = element.prix_HT * element.quantite),
            (this.totalPrice = this.totalPrice + this.price);
        });
        this.pS.addPanierPrice(this.totalPrice).subscribe();
      });
    });

    //  this.pS.getTotalPricePanier().subscribe((a) => (this.totalPrice = a));
  }
}

//e: questions$.do(questions => {questions.forEach(q => question here)})
