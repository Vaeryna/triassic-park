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
      console.log('init panier', this.panier);
      this.panier.forEach((element) => {
        this.pS.getProduitPrice(element.name).subscribe(() => {
          (this.price = element.prix_HT),
            console.log('this element name: ', element.name);
          console.log('this price: ', this.price);
          this.totalPrice = this.totalPrice + this.price;
        });
        return this.totalPrice;
      });
    });

    //  this.pS.getTotalPricePanier().subscribe((a) => (this.totalPrice = a));

    //total = somme des prix produit du panier

    /*   this.pS.getProduitPrice('Pendentif argent').subscribe((a) => {
      this.price = a.prix_HT;
      console.log('this price', this.price);
    }); */
  }
}

//e: questions$.do(questions => {questions.forEach(q => question here)})
