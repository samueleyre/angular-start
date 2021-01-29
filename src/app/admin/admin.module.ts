import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {
  MatButtonModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [HomeAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AdminModule { }
