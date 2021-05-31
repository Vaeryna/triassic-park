import { Component, OnInit, Type } from '@angular/core';
import { Dinosaure } from '../data/dinosaures';

import { ProduitService } from '../produit.service';
import { DINO } from '../data/dino-mock';
import { TypeDino } from '../data/types';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  dino: Dinosaure[] = [];
  dinotype: TypeDino[] = [];

  constructor(private pS: ProduitService) {}

  ngOnInit(): void {
    console.log('chargé ');

    this.pS.getDino().subscribe((a) => (a = this.dino));
  }
}
