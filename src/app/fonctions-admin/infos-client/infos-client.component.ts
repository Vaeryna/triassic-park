import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../data/panier';
import { ProduitBDDService } from 'src/app/produit-bdd.service';

@Component({
  selector: 'app-infos-client',
  templateUrl: './infos-client.component.html',
  styleUrls: ['./infos-client.component.scss'],
})
export class InfosClientComponent implements OnInit {
  client!: Client;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private pB: ProduitBDDService
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');

    if (id) {
      const id2 = Number(id);
      this.pB.getClientBDD(id2).subscribe((client) => {
        this.client = client;
      });
    }
  }
}
