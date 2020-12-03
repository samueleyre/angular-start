import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';
import {MatButtonModule} from '@angular/material';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
