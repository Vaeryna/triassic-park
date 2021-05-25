import { Component, OnInit } from '@angular/core';
import { Dinosaure } from '../data/dinosaures';
import { ProduitService } from '../produit.service';
import { DINO } from '../data/dino-mock';

@Component({
  selector: 'app-dinosaures',
  templateUrl: './dinosaures.component.html',
  styleUrls: ['./dinosaures.component.scss'],
})
export class DinosauresComponent implements OnInit {
  dino: Dinosaure[] = [];

  constructor(private pS: ProduitService) {}

  ngOnInit(): Dinosaure[] {
       return (this.dino = this.pS.getDino());
  }
}
