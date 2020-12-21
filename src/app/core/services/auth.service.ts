import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { User } from '../entities/user';
import { environment} from '../../../environments/environment';


/*
 * Cette méthode 
 */


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signin(email: string, password: string): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/api/login_check`,
      {email, password}
      );
  }

  signup(user: User): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/api/signup`,
      user
    );
  }

  me(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/api/ping`
    );
  }

}
