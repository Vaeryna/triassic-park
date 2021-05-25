import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dinosaure } from '../data/dinosaures';
import { TypeDino } from '../data/types';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-type-dino',
  templateUrl: './type-dino.component.html',
  styleUrls: ['./type-dino.component.scss'],
})
export class TypeDinoComponent implements OnInit {
  dino: Dinosaure[] = [];
  typedino: TypeDino[] = [];

  constructor(private pS: ProduitService, private route: ActivatedRoute) {}

  ngOnInit(): Dinosaure[] {
    const typedino = this.route.snapshot.paramMap.get('name')!;
    console.log('const typeidno: ', typedino);
    if (typedino) this.dino = this.pS.getDinoType(typedino);

    return (this.dino = this.pS.getDinoType(typedino));
  }
}
