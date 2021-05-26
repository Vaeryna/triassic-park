import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dinosaure } from '../data/dinosaures';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-dinosaures',
  templateUrl: './dinosaures.component.html',
  styleUrls: ['./dinosaures.component.scss'],
})
export class DinosauresComponent implements OnInit {
  dino: Dinosaure[] = [];

  constructor(private pS: ProduitService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pS.getDino().subscribe((dinos) => {
      this.dino = dinos;
    });
  }
}
