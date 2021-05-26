import { Component, OnInit } from '@angular/core';
import { TypeDino } from './data/types';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'commerce';

  constructor(private pS: ProduitService) {}
  dinotype: TypeDino[] = [];


  ngOnInit(): TypeDino[] {
    console.log('chargé ');
    return (this.dinotype = this.pS.getType());
  }
}
