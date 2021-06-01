import { Component, OnInit, Type } from '@angular/core';
import { ProduitService } from '../produit.service';

import { PanierProduit, Total } from '../data/panier';
import { Rayon, Produit } from '../data/produit';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  produit: Produit[] = [];

  constructor(private pS: ProduitService) {}

  ngOnInit(): void {
    console.log('chargé ');

    this.pS.getProduit().subscribe((a) => (this.produit = a));
  }
}
