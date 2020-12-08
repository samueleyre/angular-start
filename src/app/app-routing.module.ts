import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyPageComponent} from './my-page/my-page.component';

const routes: Routes = [
  {
    path: 'my-page', component: MyPageComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
