import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddInBasketComponent } from './add-in-basket/add-in-basket.component';
import { AuthComponent } from './auth/auth.component';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { ConnexionBackComponent } from './connexion-back/connexion-back.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DinosauresDetailComponent } from './dinosaures-detail/dinosaures-detail.component';
import { DinosauresComponent } from './dinosaures/dinosaures.component';
import { InfosClientComponent } from './fonctions-admin/infos-client/infos-client.component';
import { NewProduitComponent } from './fonctions-admin/new-produit/new-produit.component';

import { LienBddAuthComponent } from './lien-bdd-auth/lien-bdd-auth.component';
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
    path: 'dashboard/:mail',

    component: DashboardComponent,
  },
  {
    path: 'lien-bdd-auth/:mail',
    component: LienBddAuthComponent,
  },
  {
    path: 'lienBDD',
    component: ConnexionBackComponent,
  },
  {
    path: 'newProduit',
    component: NewProduitComponent,
  },
  {
    path: 'newRayon',
    component: NewProduitComponent,
  },
  {
    path: 'newSousrayon',
    component: NewProduitComponent,
  },
  {
    path: 'infosClient/:id',
    component: InfosClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
