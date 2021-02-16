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
    private router: Router,
  ) {
  }

  /**
   * Création du formGroup qui permet de gérer les données du formulaire
   * 'samuel@wecolearn.com' et 'admin1234' sont les données initiales du formulaires ( permet ici de gagner du temps pour les tests )
   */
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

    // on envoie les paramètres de connexion au service qui gère la connexion à l'api
    this.authService.signin(
      this.emailControl.value, // la valeur du champs email
      this.passwordControl.value // la valeur du champs password
    ).subscribe(
      (token) => {
      // connexion réussie !
      // on est envoyé à la page d'accueil du dashboard :
        this.router.navigate(['dash/home']);
      },
      (err) => {
        // on pourrait afficher une erreur de connexion
      }
    );
  }


}
