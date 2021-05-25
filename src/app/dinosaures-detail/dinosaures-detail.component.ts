import { Component, OnInit } from '@angular/core';
import { DINO } from '../data/dino-mock';
import { Dinosaures } from '../data/dinosaures';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-dinosaures-detail',
  templateUrl: './dinosaures-detail.component.html',
  styleUrls: ['./dinosaures-detail.component.scss'],
})
export class DinosauresDetailComponent implements OnInit {
  dino: Dinosaures[] = DINO;

  constructor(private pS: ProduitService) {}

  ngOnInit(): Dinosaures[] {
    return (this.dino = this.pS.getDino());
  }
}
