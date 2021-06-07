import { Component, OnInit } from '@angular/core';
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

import { Client } from '../data/panier';

@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.scss'],
})
export class CompteClientComponent implements OnInit {
  userForm!: FormGroup;
  client!: Client;

  constructor(
    private fB: FormBuilder,
    private pS: ProduitService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fB.group({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      mdp: new FormControl('', Validators.required),
    });
  }

  onSubmitClient() {
    const client = this.userForm.value;

    this.pS.addClient(client).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
