import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProduitService } from '../produit.service';
import { Produit } from '../data/produit';

@Component({
  selector: 'app-dinosaures-detail',
  templateUrl: './dinosaures-detail.component.html',
  styleUrls: ['./dinosaures-detail.component.scss'],
})
export class DinosauresDetailComponent implements OnInit {
  prod!: Produit[];
  id!: string;
  produit!: Produit;

  constructor(private pS: ProduitService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id)
      this.pS.getOneProduit(id).subscribe((prod) => {
        this.produit = prod;
      });
  }
}
