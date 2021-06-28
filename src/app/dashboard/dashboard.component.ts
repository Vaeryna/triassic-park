import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client, Panier } from '../data/panier';
import { ProduitService } from '../../app/services/produit.service';
import { catchError, filter, find, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  client!: Client[];
  mail = sessionStorage.getItem('mail');
  panier!: Panier[];
  clientID!: string;
  article!: Panier[];
  price!: number;
  totalPrice: number = 0;

  constructor(private pS: ProduitService) {}

  ngOnInit(): void {
    if (this.mail)
      this.pS.getClient('mail', this.mail).subscribe((client) => {
        this.client = client;
        if (this.mail)
          this.pS.getPanierClient(this.mail).subscribe((panier) => {
            console.log('paneir', panier),
              (this.panier = Object.values(panier));
            this.panier.forEach((element) => {
              this.pS.getProduitPrice(element.name).subscribe(() => {
                (this.price = element.price_HT * element.quantite),
                  (this.totalPrice = this.totalPrice + this.price);

              });
            });
          });
      });
  }
}
