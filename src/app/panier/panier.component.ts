import { Component, OnInit } from '@angular/core';
import { Panier } from '../data/panier';
import { ProduitService } from '../produit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  panier!: Panier[];

  constructor(private pS: ProduitService) {}

  ngOnInit(): void {
    this.pS.getPanier().subscribe((a) => {
      this.panier = a;
      console.log(this.panier);
    });
  }
}
