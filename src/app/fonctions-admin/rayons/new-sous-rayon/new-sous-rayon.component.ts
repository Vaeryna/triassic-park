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
  selector: 'app-new-sous-rayon',
  templateUrl: './new-sous-rayon.component.html',
  styleUrls: ['./new-sous-rayon.component.scss'],
})
export class NewSousRayonComponent implements OnInit {
  id!: String;
  sousRayonForm!: FormGroup;
  rayons!: Rayon[];
  sousRayons!: SousRayon[];
  rayon!: Rayon;
  sousRayon!: SousRayon;
  rayon_id!: String;

  constructor(
    private router: ActivatedRoute,
    private fB: FormBuilder,
    private route: Router,
    private pB: ProduitBDDService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.pB.getRayonBDD().subscribe((a) => {
      this.rayons = a;
    });
  }

  initForm() {
    this.sousRayonForm = new FormGroup({
      name: new FormControl('', Validators.required),
      rayon_id: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const rayon = this.sousRayonForm.value;

    console.log('value', this.sousRayonForm.value);

     this.pB
      .addSouSRayonBDD(rayon)
      .subscribe(() => this.route.navigate(['/admin']));
  }
}
