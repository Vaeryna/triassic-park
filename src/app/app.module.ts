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
import { environment as env } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AddInBasketComponent } from './add-in-basket/add-in-basket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompteClientComponent } from './compte-client/compte-client.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
