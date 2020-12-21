import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    /*
    * Ici on définit un module qui est chargé seulement si la route est : /auth/*
    * Le reste du routing est définit dans auth-routing.module.ts
    * */
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
];

@NgModule({
  /*
   * Dans le router principale on utilise forRoot()
   */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
