import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionService} from './services/session.service';

// intercepter les requêtes faites à l'api

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const update: { headers?: HttpHeaders } = {};

    if (this.sessionService.get()) {
      update.headers = new HttpHeaders(
        {
          Authorization: 'Bearer ' + this.sessionService.get()
        });
    }

    const clonedRequest: HttpRequest<any> = req.clone(update);

    return next.handle(clonedRequest);

  }
}
