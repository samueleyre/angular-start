import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {SessionService} from './session.service';
import {User} from '../entities/user';
import {environment} from '../../../environments/environment';

// service pour gérer l'authentification

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static user: User | null = null;

  static isLogged = AuthService.user !== null;

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  public signin(email: string, password: string): Observable<any> {
  // authentifier
    return this.http.post(`${environment.api}/api/login_check`, {email, password}).pipe(
      map((response: { token: string }) => {
        if ('token' in response) {
          this.sessionService.set(response.token);
        }
       }));
  }

  public signup(user: User): Observable<any> {
  // créer un compte
    return this.http.post(`${environment.api}/api/signup`, user);
  }

  public me(): Observable<any> {
  // vérifier qu'on est connecté et récupérer les données clients
    return this.http.get(`${environment.api}/api/ping`).pipe(tap((user: User) => {
      AuthService.user = user;
    }));
  }

}
