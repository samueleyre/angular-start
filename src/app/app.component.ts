import { Component } from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
  ) {}

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }

  get isAdmin(): boolean {
    return AuthService.isAdmin;
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/']).then(() => {
      this.snackBar.open('Vous êtes bien déconnecté !', null, {
        duration: 2000
      });
    });
  }

}
