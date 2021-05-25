import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DINO } from '../data/dino-mock';
import { Dinosaure } from '../data/dinosaures';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-dinosaures-detail',
  templateUrl: './dinosaures-detail.component.html',
  styleUrls: ['./dinosaures-detail.component.scss'],
})
export class DinosauresDetailComponent implements OnInit {
  dino: Dinosaure[] = DINO;
  id!: string;
  dinosaure!: Dinosaure;

  constructor(private pS: ProduitService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id: ', id);
    if (id) this.dinosaure = this.pS.getOneDino(id);
  }
}
