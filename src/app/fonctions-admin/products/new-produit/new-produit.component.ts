import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../../../app/services/produit.service';
import { AuthService } from '../../../../app/services/auth.service';

import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  ValidatorFn,
  AbstractControl,
  NgForm,
  FormGroupDirective,
} from '@angular/forms';

import { Produit, Rayon, SousRayon } from '../../../data/produit';
import { ProduitBDDService } from '../../../../app/services/produit-bdd.service';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.scss'],
})
export class NewProduitComponent implements OnInit {
  id!: String;
  productForm!: FormGroup;
  product!: Produit;
  rayons!: Rayon[];
  sousRayons!: SousRayon[];
  rayon!: Rayon;
  sousRayon!: SousRayon;

  constructor(
    private router: ActivatedRoute,
    private fB: FormBuilder,
    private pS: ProduitService,
    private auS: AuthService,
    private route: Router,
    private pB: ProduitBDDService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.pB.getRayonBDD().subscribe((a) => {
      this.rayons = a;
    });

    this.pB.getSousRayonBDD().subscribe((a) => {
      this.sousRayons = a;
    });

    this.id = this.rayon.id + this.sousRayon.id;
  }

  initForm() {
    this.productForm = new FormGroup({
      id: new FormControl(this.id, Validators.required),
      name: new FormControl('', Validators.required),
      price_HT: new FormControl('', Validators.required),
      tax: new FormControl('', Validators.required),
      rayon: new FormControl('', Validators.required),
      sousRayon: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const product = this.productForm.value;
    console.log('product id submit', product.id, ' ! ');

    console.log('value', this.productForm.value);
    console.log(
      'this product id',
      product.id,
      'rayon id + sous rayon id',
      this.rayon.id,
      ' + ',
      this.sousRayon.id
    );
    console.log('form name: ', product.name, 'form id: ', product.id);

    /*  this.pB
      .addProductBDD(product)
      .subscribe(() => this.route.navigate(['/lienBDD'])); */
  }
}
