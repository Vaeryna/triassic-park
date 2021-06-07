import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddInBasketComponent } from './add-in-basket/add-in-basket.component';
import { AuthComponent } from './auth/auth.component';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DinosauresDetailComponent } from './dinosaures-detail/dinosaures-detail.component';
import { DinosauresComponent } from './dinosaures/dinosaures.component';
import { AuthGuard } from './guards/auth.guard';
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
    path: 'add-in-basket/produit/:name',
    component: AddInBasketComponent,
  },
  {
    path: 'newLog',
    component: CompteClientComponent,
  },
  { path: 'auth', component: AuthComponent },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
