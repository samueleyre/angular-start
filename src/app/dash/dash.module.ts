import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashRoutingModule} from './dash-routing.module';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    MatCardModule
  ]
})
export class DashModule { }
