import { Component, OnInit } from '@angular/core';
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


@Component({
  selector: 'app-add-in-basket',
  templateUrl: './add-in-basket.component.html',
  styleUrls: ['./add-in-basket.component.scss'],
})
export class AddInBasketComponent implements OnInit {
  dinoForm!: FormGroup;


  constructor(
    private pS: ProduitService,
    private fB: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dinoForm = this.fB.group({
      name: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.dinoForm.get('name');
  }

  onSubmit() {
    const dino = this.dinoForm.value;

    this.pS.addDino(dino).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate([
          '/dino',
          { queryParams: 'Dino ajouté avec succès' },
        ]);
      },
      (error) => {
        console.log(error);
      },
      () => console.log('Completé"')
    );
  }
}
