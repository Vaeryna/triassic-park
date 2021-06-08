import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../data/panier';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  client!: Client[];
  mail!: string;

  constructor(private pS: ProduitService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const mail = this.route.snapshot.paramMap.get('mail');

    if (mail)
      this.pS.getClient(mail).subscribe((client) => {
        this.client = client;
      });
  }
}
