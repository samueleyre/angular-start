import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MyFirstPageComponent} from './my-first-page/my-first-page.component';
import {MySecondPageComponent} from './my-second-page/my-second-page.component';
import {MySecondPageOneComponent} from './my-second-page-one/my-second-page-one.component';
import {MySecondPageTwoComponent} from './my-second-page-two/my-second-page-two.component';

const routes: Routes = [
  {
    path: 'myFirstPage', component: MyFirstPageComponent
  },
  {
    path: 'mySecondPage',
    // component: MySecondPageComponent,
    children: [
      {
        path: 'one',
        component: MySecondPageOneComponent,
      },
      {
        path: 'two',
        component: MySecondPageTwoComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
