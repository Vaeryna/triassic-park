import { Component, OnInit } from '@angular/core';
import { Client } from '../data/panier';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  client!: Client[];

  constructor(private pS: ProduitService) {}

  ngOnInit(): void {
    this.pS.getClient().subscribe((client) => {
      this.client = client;
    });
  }
}
