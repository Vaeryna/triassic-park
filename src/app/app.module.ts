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

firebase.initializeApp(env.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DinosauresComponent,
    DinosauresDetailComponent,
    TypeDinoComponent,
    PanierComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
