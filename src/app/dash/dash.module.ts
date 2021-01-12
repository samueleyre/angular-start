import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashRoutingModule} from './dash-routing.module';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    MatCardModule
  ]
})
export class DashModule { }
