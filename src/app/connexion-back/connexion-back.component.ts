import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitService } from '../produit.service';
import { Client } from '../data/panier';
import { Router } from '@angular/router';
import { ProduitBDDService } from '../produit-bdd.service';

@Component({
  selector: 'app-connexion-back',
  templateUrl: './connexion-back.component.html',
  styleUrls: ['./connexion-back.component.scss'],
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

  ngOnInit(): void {
    this.pB.getAllClientBDD().subscribe((client) => {
      this.clients = client;
      console.log('clients: ', this.clients);
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

  onDelete(id: number) {
    this.pB.deleteClientBDD(id).subscribe();
  }

  onInfos(id: number) {
    this.pB.getClientBDD(id).subscribe((a) => {
      this.client = a;
      console.log('client infos: ', this.client, 'client id ', id);
    });
  }
}
