import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAdminComponent} from './components/home-admin/home-admin.component';

const routes: Routes = [
  {
    path: 'home', component: HomeAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
