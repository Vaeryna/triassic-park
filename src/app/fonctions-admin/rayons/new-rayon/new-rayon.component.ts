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
  selector: 'app-new-rayon',
  templateUrl: './new-rayon.component.html',
  styleUrls: ['./new-rayon.component.scss'],
})
export class NewRayonComponent implements OnInit {
  id!: String;
  rayonForm!: FormGroup;
  rayons!: Rayon[];
  sousRayons!: SousRayon[];
  rayon!: Rayon;
  sousRayon!: SousRayon;

  constructor(
    private router: ActivatedRoute,
    private fB: FormBuilder,
    private route: Router,
    private pB: ProduitBDDService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.rayonForm = new FormGroup({
          name: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const rayon = this.rayonForm.value;

    console.log('value', this.rayonForm.value);

    this.pB
      .addRayonBDD(rayon)
      .subscribe(() => this.route.navigate(['/admin']));
  }
}
