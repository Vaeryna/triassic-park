import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: Router,
    private router: ActivatedRoute,
    private auS: AuthService
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
      password: new FormControl('', Validators.required),
    });
  }

  onSubmitClient(client: Client) {
    /* console.log(
      'form mail: ',
      form.value.mail,
      'password: ',
      form.value.password
    ); */
    /*     const mail = form.value.mail

    //creation client firebase
    this.auS
      .create(form.value.mail, form.value.password)
      .then((res) => this.route.navigate(['/dashboard/${mail}']))
      .catch((err) => console.log('err', err));
  } */

    this.pS.addClient(client).subscribe(() => {
      this.route.navigate(['']);
    });
  }
}
