import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {ProfileInterface} from '../interfaces/profile';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {User} from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  get() {
    return AuthService.user;
  }

  update(updateUser: ProfileInterface) {
    return this.httpClient.patch(
      `${environment.api}/api/profile`,
      updateUser
    ).pipe( tap((user: User) => {
      AuthService.user = user;
    }));
  }

}
