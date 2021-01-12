import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashRoutingModule} from './dash-routing.module';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule, MatSelectModule} from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [
    DashRoutingModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class DashModule { }
