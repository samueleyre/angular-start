/* tslint:disable:no-string-literal */
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

/*
service pour récupérer les profils qui matchent
 */
@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  matchs$(): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/user/matchs`,
      {
        max: 30
      }
    ).pipe(
      map(result => result['data'].map(val => val[0])),
    );
  }

}
