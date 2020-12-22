import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  userForm = this.fb.group({
    email: ['samuel@wecolearn.com', [Validators.required, Validators.email]],
    password: ['admin1234', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  signin() {

    console.log('submitted : ');

    // toutes les données du formulaire
    console.log(this.userForm.getRawValue());

    this.authService.signin(
      this.emailControl.value,
      this.passwordControl.value
    ).subscribe(
      (result) => {
        console.log({ result });
      },
      (err) => {
        // on peut dire à l'utilisateur qu'il n'a pas donné les bons identifiants
        console.log({ err });
      });
  }








}
