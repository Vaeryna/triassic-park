import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddInBasketComponent } from './add-in-basket/add-in-basket.component';
import { DinosauresDetailComponent } from './dinosaures-detail/dinosaures-detail.component';
import { DinosauresComponent } from './dinosaures/dinosaures.component';
import { PanierComponent } from './panier/panier.component';
import { TypeDinoComponent } from './type-dino/type-dino.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
  {
    path: 'detail/:id',
    component: DinosauresDetailComponent,
  },
  { path: 'catalogue', component: DinosauresComponent },

  { path: 'type/:name', component: TypeDinoComponent },

  { path: 'panier', component: PanierComponent },
  {
    path: 'add-in-basket',
    component: AddInBasketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
