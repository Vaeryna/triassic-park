import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitService } from '../../services/produit.service';
import { Client } from '../../data/panier';
import { Router } from '@angular/router';
import { ProduitBDDService } from '../../services/produit-bdd.service';
import { Produit } from '../../data/produit';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.html',
  styleUrls: ['./admin-page.scss'],
})
export class ConnexionBackComponent implements OnInit {
  public isCollapsedClient = true;
  public isCollapsedProduct = true;
  public isCollapsedRayon = true;
  public isCollapsedSousRayon = true;

  constructor(private router: Router, private pB: ProduitBDDService) {}
  clients!: any;
  client!: Client;
  id!: Number;
  product!: Produit;
  products!: any;

  ngOnInit(): void {
    this.pB.getAllClientBDD().subscribe((client) => {
      this.clients = client;
      console.log('clients: ', this.clients);
    });
    this.pB.getAllProductBDD().subscribe((product) => {
      console.log('produits: ', (this.products = product));
      this.products = product;
    });
  }

  onDeleteClient(id: number) {
    this.pB.deleteClientBDD(id).subscribe();
  }

  onInfosClient(id: number) {
    this.pB.getClientBDD(id).subscribe((a) => {
      this.client = a;
      console.log('client infos: ', this.client, 'client id ', id);
    });
  }

  onDeleteProduct(id: number) {
    this.pB.deleteProductBDD(id).subscribe();
  }

  onInfosProduct(id: number) {
    this.pB.getProductBDD(id).subscribe((a) => {
      this.product = a;
      console.log('client infos: ', this.product, 'client id ', id);
    });
  }
}
