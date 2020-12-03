import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from '../shared/shared.module';
import {DashboardRoutingModule} from './dashboard-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
