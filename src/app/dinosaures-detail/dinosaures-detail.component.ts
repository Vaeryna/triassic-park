import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProduitService } from '../produit.service';
import { Produit } from '../data/produit';

declare let $: any;

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-dinosaures-detail',
  templateUrl: './dinosaures-detail.component.html',
  styleUrls: ['./dinosaures-detail.component.scss'],

  animations: [
    trigger('openClosed', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          display: 'none',
          height: '0px',
        })
      ),
      transition('open => closed', [animate('1s')]),
    ]),
  ],
})
export class DinosauresDetailComponent implements OnInit {
  prod!: Produit[];
  id!: string;
  produit!: Produit;
  quantite!: number;

  message: string | null = null;
  isOpen: boolean = false;
  idAdd: string | null = null;
  quantiteAdd: number | null = null;

  constructor(private pS: ProduitService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.pS.getOneProduit(id).subscribe((prod) => {
        this.produit = prod;
      });

    this.route.queryParams.subscribe((params: any) => {
      if (params.message) {
        this.message = params.message;
        this.isOpen = true;
        setTimeout(() => (this.isOpen = false), 1000);
      }
    });
  }

  onAdd(name: string, quantite: number) {
    this.idAdd = name;
    this.quantiteAdd = quantite;
    console.log('onDelete', '"', name, '"');
  }
}

/*
const main = async () => {

    try {

        const city = await getCurrentCity();
        const weatherInfo = await getWeatherInfo(city);

        console.log(`${city}: ${weatherInfo.temperature}`);

    }
    catch (error) {
        console.error(error);
    }

};

main()
    .then(() => console.log('Finished'))
    .catch(() => console.error('Failed!'));



<p *ngIf="(observable$ | async) > 5">{{ observable$ | async }}</p>

ngOnInit() {
	setInterval(() => {
		this.observable++
	}, 1000);
}

    */
