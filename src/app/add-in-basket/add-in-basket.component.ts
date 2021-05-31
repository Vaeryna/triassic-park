import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

import { Dinosaure } from '../data/dinosaures';

@Component({
  selector: 'app-add-in-basket',
  templateUrl: './add-in-basket.component.html',
  styleUrls: ['./add-in-basket.component.scss'],
})
export class AddInBasketComponent implements OnInit {
  dinoForm!: FormGroup;
  dinosaure!: Dinosaure[];

  constructor(
    private pS: ProduitService,
    private fB: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pS.getDino().subscribe((dinos) => {
      this.dinosaure = dinos;
      return dinos;
    });

    console.log('ruc: ');

    this.dinoForm = this.fB.group({
      quantite: new FormControl('', [Validators.required]),
      dino: new FormControl('', [Validators.required]),
    });
  }

  get quantite() {
    return this.dinoForm.get('quantite');
  }

  get dino() {
    return this.dinoForm.get('dino');
  }

  onSubmit() {
    console.log('dinoFormValue', this.dinoForm.value);
    const dino = this.dinoForm.value;

    this.pS.addDino(dino).subscribe();
  }
}
