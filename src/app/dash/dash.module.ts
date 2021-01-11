import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashRoutingModule} from './dash-routing.module';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    DashRoutingModule,
    SharedModule
  ]
})
export class DashModule { }
