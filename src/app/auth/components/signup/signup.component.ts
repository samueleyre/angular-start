import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  public userForm = this.fb.group({
    first_name: ['samuel'],
    last_name: ['eyre'],
    email: ['samuel.eyre+95@yopmail.com', [Validators.required, Validators.email]],
    password: ['admin1234', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.userForm.value).subscribe(() => {
      // aller à la page d'accueil

      this.router.navigate(['/dashboard/home']);
    });
  }

}
