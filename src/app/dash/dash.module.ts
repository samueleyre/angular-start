import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashRoutingModule} from './dash-routing.module';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    DashRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class DashModule { }
