import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) { }

  userForm = this.fb.group(
    {
      email: ['samuel@wecolearn.com',  [Validators.required, Validators.email]],
      password: ['admin1234', [Validators.required, Validators.minLength(6)]]
    }
  );

  ngOnInit() {
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  signin() {
    this.authService.signin(
      this.emailControl.value,
      this.passwordControl.value
    ).subscribe((token) => {
      // connexion réussie !
        this.router.navigate(['dash/home']);
      },
      (err) => {
        // afficher une erreur de connexion
      }
    );
  }


}
