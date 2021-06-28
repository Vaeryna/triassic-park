import { Component, OnInit, Type } from '@angular/core';
import { ProduitService } from '../../app/services/produit.service';

import { Panier, Total } from '../data/panier';
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
    this.pS.getProduit().subscribe((a) => (this.produit = a));
  }
}
