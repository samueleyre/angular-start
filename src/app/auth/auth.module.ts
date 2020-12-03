import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
