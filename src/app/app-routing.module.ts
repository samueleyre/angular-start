import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanActivateGuard} from './core/can-activate.guard';

const routes: Routes = [
  {
    path: 'auth',
    // lazy loading :
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'dash',
    // guard pour empêcher l'accès aux utilisateurs non connectés
    canActivate: [CanActivateGuard],
    // lazy loading :
    loadChildren: () => import('./dash/dash.module').then(mod => mod.DashModule),
  },
  {
    path: 'admin',
    canActivate: [CanActivateGuard],
    // donnée utilisée pour dire que c'est une route admin :
    data: { admin: true},
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    // on est redirigé vers la page de connexion si la route n'est pas définie ( le top serait une page 404 )
    path: '**',
    redirectTo: 'auth/signin'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
