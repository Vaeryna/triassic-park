import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DinosauresComponent } from './dinosaures/dinosaures.component';
import { DinosauresDetailComponent } from './dinosaures-detail/dinosaures-detail.component';
import { TypeDinoComponent } from './type-dino/type-dino.component';
import { PanierComponent } from './panier/panier.component';

import firebase from 'firebase';
import 'firebaseui/dist/firebaseui.css';

import { environment as env } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddInBasketComponent } from './add-in-basket/add-in-basket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompteClientComponent } from './connexion/connexion';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthService } from '../app/services/auth.service';

import { LienBddAuthComponent } from './lien-bdd-auth/lien-bdd-auth.component';

import { ConnexionBackComponent } from './fonctions-admin/admin-page/admin-page.component';
import { NewProduitComponent } from './fonctions-admin/products/new-produit/new-produit.component';
import { InfosClientComponent } from './fonctions-admin/clients/infos-client/infos-client.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewRayonComponent } from './fonctions-admin/rayons/new-rayon/new-rayon.component';
import { NewSousRayonComponent } from './fonctions-admin/rayons/new-sous-rayon/new-sous-rayon.component';

firebase.initializeApp(env.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DinosauresComponent,
    DinosauresDetailComponent,
    TypeDinoComponent,
    PanierComponent,
    AddInBasketComponent,
    CompteClientComponent,
    AuthComponent,
    DashboardComponent,
    LienBddAuthComponent,
    ConnexionBackComponent,
    NewProduitComponent,
    InfosClientComponent,
    NewRayonComponent,
    NewSousRayonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
