import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DinosauresComponent } from './dinosaures/dinosaures.component';
import { DinosauresDetailComponent } from './dinosaures-detail/dinosaures-detail.component';
import { TypeDinoComponent } from './type-dino/type-dino.component';

@NgModule({
  declarations: [AppComponent, AccueilComponent, DinosauresComponent, DinosauresDetailComponent, TypeDinoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
