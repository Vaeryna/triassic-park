import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { AuthService } from '../auth.service';

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

import { Client } from '../data/panier';

@Component({
  selector: 'app-lien-bdd-auth',
  templateUrl: './lien-bdd-auth.component.html',
  styleUrls: ['./lien-bdd-auth.component.scss'],
})
export class LienBddAuthComponent implements OnInit {
  mail!: string;
  userForm!: FormGroup;
  client!: Client;

  constructor(
    private router: ActivatedRoute,
    private fB: FormBuilder,
    private pS: ProduitService,
    private auS: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    const mail = this.router.snapshot.paramMap.get('mail');
    if (mail) {
      this.mail = mail;
    }
  }

  initForm() {
    const mail = this.router.snapshot.paramMap.get('mail');
    if (mail) {
      this.mail = mail;
      this.userForm = this.fB.group({
        nom: new FormControl('', Validators.required),
        prenom: new FormControl('', Validators.required),
        mail: new FormControl(this.mail, Validators.required),
        adresse: new FormControl('', Validators.required),
        ville: new FormControl('', Validators.required),
      });
    }
  }

  onSubmit() {
    const client = this.userForm.value;
    console.log('value', this.userForm.value);

    console.log('form mail: ', client.mail);

    // creation client dans bdd
    this.pS.addClient(client).subscribe(() => {
      this.route.navigate(['']);
    });
  }
}
