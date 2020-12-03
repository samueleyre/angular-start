import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {SessionService} from './session.service';
import {User} from '../entities/user';

// service pour gérer l'authentification

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static isLogged = false;

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  public signin(email: string, password: string): Observable<any> {
  // authentifier
    return this.http.post('/api/login_check', {email, password}).pipe(
      map((response: { token: string }) => {
        if ('token' in response) {
          this.sessionService.set(response.token);
          AuthService.isLogged = true;
        } else {
          AuthService.isLogged = false;
        }
       }));
  }

  public signup(user: User): Observable<any> {
  // créer un compte
    return this.http.post('/api/signup', user);
  }

  public ping(): Observable<any> {
  // vérifier qu'on est connecté et récupérer les données clients
    return this.http.get('/api/ping').pipe(tap(ret => console.log(ret)));
  }

}
