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
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

import { environment as env } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddInBasketComponent } from './add-in-basket/add-in-basket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardService } from './guard.service';
import { AuthService } from './auth.service';
import { IntercepteurInterceptor } from './intercepteur.interceptor';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepteurInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
