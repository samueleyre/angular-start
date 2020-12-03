import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from './auth.service';
import {catchError, map} from 'rxjs/operators';
import {SessionService} from './session.service';

// service pour bloquer les pages quand on est pas connecté

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.me().pipe(
      catchError((error: Response) => {
        let status = 500;
        if (error.status === 401 || error.status === 403) { // unauthorized or forbidden //
          this.router.navigate(['/auth/signin']).then(() => {
            AuthService.user = null;
            this.sessionService.clear();
          });
          status = error.status;
        }
        return of({ status });
      }),
      map((response: Response) => {
        return !(401 === response.status || 403 === response.status);
      }));
  }
}
