import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client, Panier } from '../data/panier';
import { ProduitService } from '../produit.service';
import { catchError, filter, find, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  client!: Client[];
  mail!: string;
  panier!: Panier[];
  clientID!: string;
  article!: Panier[];

  constructor(private pS: ProduitService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const mail = this.route.snapshot.paramMap.get('mail');

    if (mail) {
      this.pS.getClient('mail', mail).subscribe((client) => {
        this.client = client;

        this.pS.getClientId(mail).subscribe((id) => {
          this.clientID = id;

          this.pS.getPanierClient(this.clientID).subscribe((panier) => {
            console.log('paneir', panier),
              (this.panier = Object.values(panier));
          });
        });
      });
    }
  }
}
