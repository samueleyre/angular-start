import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entities/user';

import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {SessionService} from './session.service';

/*
Service dédié aux appels à l'API lié à l'authentification,
à stocker l'utilisateur connecté,
et à gérer le token d'authentification
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService
  ) { }

  // On stock ici les données de l'utilisateur connecté
  static user: User = null;

  static get isSignedIn(): boolean {
    return !!AuthService.user;
  }

  static get isAdmin(): boolean {
    return !!AuthService.user && AuthService.user.roles.includes('ROLE_ADMIN');
  }

  signin(email: string, password: string): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/login_check`,
      {
        email,
        password
      }
    ).pipe(
      tap((result) => {
        this.sessionService.setToken(result.token);
      }),
    );
  }

  signup(user: User): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/signup`,
      user
    );
  }

  // vérifier si l'utilisateur est connecté et récupérer les données de l'utilisateur
  me(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/ping`,
    ).pipe(
      tap((user: User) => {
        AuthService.user = user;
      })
    );
  }

  signOut(): void {
    this.sessionService.clear();
    AuthService.user = null;
  }


}
