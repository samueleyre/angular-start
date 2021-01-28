import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

/*
Service dédié aux tags pour l'auto-complete
 */
@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  get(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/api/tag/find`,
    );
  }

}
