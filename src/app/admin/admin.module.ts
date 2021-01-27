import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';



@NgModule({
  declarations: [HomeAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdminModule { }
