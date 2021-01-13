import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from './services/auth.service';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.me().pipe(
      catchError((response: Response) => {

        let status = 500;
        if (response.status === 401 || response.status === 403) {
          status = response.status;
        }
        return of({ status });
      }),
      map((response: Response | User ) => {
        if ('status' in response && (response.status === 401 || response.status === 403)) {
          this.router.navigate(['/auth/signin']);
          return false;
        } else if ('admin' in next.data && 'roles' in response && !response.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/auth/signin']);
          return false;
        }
        return true;
      })
    );
  }

}
