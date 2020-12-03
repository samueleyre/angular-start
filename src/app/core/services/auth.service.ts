import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {SessionService} from './session.service';
import {User} from '../entities/user';
import {environment} from '../../../environments/environment';

// service pour gérer l'authentification

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static user$ = new BehaviorSubject<User | null>(null);
  static isLogged$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private sessionService: SessionService) {
    AuthService.user$.pipe(tap(
      user => {
        console.log(user !== null);
        AuthService.isLogged$.next(user !== null);
      }
    )).subscribe();
  }

  static get user(): User | null {
    return this.user$.getValue();
  }

  static get isLogged(): boolean {
    return this.isLogged$.getValue();
  }

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

  public signout(): void {
    AuthService.user$.next(null);
    this.sessionService.clear();
  }

  public me(): Observable<any> {
  // vérifier qu'on est connecté et récupérer les données clients
    return this.http.get(`${environment.api}/api/ping`).pipe(tap((user: User) => {
      AuthService.user$.next(user);
    }));
  }

}
