import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {ProfileInterface} from '../interfaces/profile';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {User} from '../entities/user';

/*
Service dédié à géré les données de l'utilisateur connecté
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  get() {
    // On récupère l'utilisateur connecté dans AuthService, pas besoin de faire une nouvelle requête
    return AuthService.user;
  }

  update(updateUser: ProfileInterface) {
    return this.httpClient.patch(
      `${environment.api}/profile`,
      updateUser
    ).pipe( tap((user: User) => {
      // On met à jour la donnée de l'utilisateur connecté
      AuthService.user = user;
    }));
  }

}
