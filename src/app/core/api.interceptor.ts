import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionService} from './services/session.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private sessionService: SessionService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const update: { headers?: HttpHeaders } = {};

    // On récupère le token stocké en localstorage
    const token = this.sessionService.getToken();

    if (token) {

      // on créé un object du bon format
      update.headers = new HttpHeaders(
        {
          Authorization: `Bearer ${token}`, // Norme en JWT
        }
      );
    }

    // on clone la requête avec les mises à jours qu'on lui donne
    const clonedRequest: HttpRequest<any> = req.clone(update);

    // On donne la main au prochain intercepteur s'il y en a un, sinon on met à jour la requête
    return next.handle(clonedRequest);
  }

}
