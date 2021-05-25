import { Component, OnInit } from '@angular/core';
import { Dinosaure } from '../data/dinosaures';

import { ProduitService } from '../produit.service';
import { DINO } from '../data/dino-mock';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  dino: Dinosaure[] = [];

  constructor(private pS: ProduitService) {}

  ngOnInit(): Dinosaure[] {
    console.log((this.dino = this.pS.getDino()));
    console.log('chargé ');


    return (this.dino = this.pS.getDino());
  }
}
