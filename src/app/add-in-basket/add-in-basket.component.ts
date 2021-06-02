import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { ActivatedRoute, Router } from '@angular/router';

import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

import { Produit } from '../data/produit';

@Component({
  selector: 'app-add-in-basket',
  templateUrl: './add-in-basket.component.html',
  styleUrls: ['./add-in-basket.component.scss'],
})
export class AddInBasketComponent implements OnInit {
  produitForm!: FormGroup;
  prod!: Produit;

  constructor(
    private pS: ProduitService,
    private fB: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    const id = this.route.snapshot.paramMap.get('name');
    if (id)
      this.pS.getOneProduit(id).subscribe((produit) => {
        this.prod = produit;
        this.produitForm.patchValue(produit);
      });
  }

  initForm() {
    this.produitForm = this.fB.group({
      name: new FormControl(
        '',
        Validators.required // pour définir dans le controle un champ requis
      ),
      quantite: '',
    });
  }

  get quantite() {
    return this.produitForm.get('quantite');
  }

  get produit() {
    return this.produitForm.get('produit');
  }

  onSubmit() {
    console.log('dinoFormValue', this.produitForm.value);
    const produit = this.produitForm.value;
    this.pS.addProduit(produit).subscribe(() => {
      this.router.navigate(['/catalogue']);
    });
  }
}
