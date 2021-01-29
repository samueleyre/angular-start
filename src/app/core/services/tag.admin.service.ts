import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TagInterface} from '../interfaces/tag';

@Injectable({
  providedIn: 'root'
})
export class TagAdminService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  get(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/admin/tags`,
      // tslint:disable-next-line
    ).pipe(map((tags: TagInterface[]) => tags.filter(tag => tag['type'] === 0)));
  }

  add(tag: {name: string}): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/admin/tag`,
      tag
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(
      `${environment.api}/admin/tag/${id}`,
    );
  }


}
