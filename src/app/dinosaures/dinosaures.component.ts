import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../data/produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-dinosaures',
  templateUrl: './dinosaures.component.html',
  styleUrls: ['./dinosaures.component.scss'],
})
export class DinosauresComponent implements OnInit {
  produit: Produit[] = [];

  constructor(private pS: ProduitService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pS.getProduit().subscribe((produits) => {
      this.produit = produits;
    });
  }
}
