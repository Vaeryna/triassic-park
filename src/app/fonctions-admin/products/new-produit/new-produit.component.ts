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

import { Produit } from '../../../data/produit';
import { ProduitBDDService } from '../../../../app/services/produit-bdd.service';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.scss'],
})
export class NewProduitComponent implements OnInit {
  id!: Number;
  productForm!: FormGroup;
  product!: Produit;

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
  }

  initForm() {
    this.productForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      prix_HT: new FormControl('', Validators.required),
      taxe: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const product = this.productForm.value;
    console.log('value', this.productForm.value);

    console.log('form name: ', product.name, 'form id: ', product.id);

    this.pB.addProductBDD(product).subscribe(() => this.route.navigate(['/lienBDD']));
  }
}
