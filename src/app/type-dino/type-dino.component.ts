import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Panier, Total } from '../data/panier';
import { Rayon, Produit } from '../data/produit';
import { ProduitService } from '../../app/services/produit.service';

@Component({
  selector: 'app-type-dino',
  templateUrl: './type-dino.component.html',
  styleUrls: ['./type-dino.component.scss'],
})
export class TypeDinoComponent implements OnInit {
  produit: Produit[] = [];
  productRayon: Rayon[] = [];

  constructor(private pS: ProduitService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productRayon = this.route.snapshot.paramMap.get('name')!;

    if (productRayon)
      this.pS.getProductRayon(productRayon).subscribe((produit) => {
        this.produit = produit;
        console.log('getProduit ', produit);
      });
  }
}
