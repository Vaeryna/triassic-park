import { Component, OnInit } from '@angular/core';
import { Type } from './data/types';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'commerce';

  type: Type[] = [];

  constructor(private pS: ProduitService) {}

  ngOnInit(): Type[] {
    console.log('chargé ');
    return (this.type = this.pS.getType());
  }
}
