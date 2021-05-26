import { Component, OnInit } from '@angular/core';
import { Panier } from '../data/panier';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  panier: Panier[] = [];

  constructor(private ps: ProduitService) {}

  ngOnInit(): Panier[] {
    return this.ps.getPanier();
  }
}
