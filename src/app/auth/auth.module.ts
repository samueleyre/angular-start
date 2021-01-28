import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';

import { SignupComponent } from './components/signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

/*
Le Module 'Auth' est dédié à toute l'UI lié à l'authentification : login, inscription ...
 */
@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
