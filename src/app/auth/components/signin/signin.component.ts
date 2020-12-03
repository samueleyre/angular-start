import {Component, OnInit} from '@angular/core';
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
  ) {
    this.authService.signout();
  }

  public userForm = this.fb.group({
    email: ['samuel@wecolearn.com', [Validators.required, Validators.email]],
    password: ['admin1234', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
  }

  signin() {
    this.authService.signin(this.userForm.value.email, this.userForm.value.password).subscribe(() => {
      // aller à la page d'accueil
      this.router.navigate(['/dashboard/home']);
    });
  }

}
