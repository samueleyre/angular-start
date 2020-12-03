import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './core/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'dashboard', canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: '', redirectTo: 'auth/signin', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
