import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from './services/auth.service';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from './entities/user';
import {MatSnackBar} from '@angular/material';

/*
Guard qui autorise uniquement les utilisateurs connectés et dans le cas de route admin vérifie aussi le role de l'utilisateur
 */
@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // on envoie une requête à une route protégé pour vérifier que notre token est validé, la route "ping" renvoie l'utilisateur connecté
    return this.authService.me().pipe(

      // catchError est exécuté s'il y a une erreur
      catchError((response: Response) => {

        // on initialise le status à 500 ( erreur de code )
        let status = 500;

        // les erreurs 401 et 403 correspondent à des erreurs de permissions
        if (response.status === 401 || response.status === 403) {
          status = response.status;
        }

        // on envoie le status dans le pipe pour pouvoir le récupérer dans le map juste après ( sinon map ne serait pas executé )
        return of({ status });
      }),
      map((response: Response | User ) => {

        // 1er cas : il y a avait une erreur
        if ('status' in response && (response.status === 401 || response.status === 403)) {
          this.router.navigate(['/auth/signin']).then(() => {
              this.snackBar.open(`Vous devez être connecté pour accéder à cette page !`, null, {
                duration: 2000,
              });
          });
          return false;

        //  2ème cas : pas d'erreur mais on vérifie que si la route est admin, l'utilisateur a bien les droits
        } else if ('admin' in next.data && 'roles' in response && !response.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/auth/signin']).then(() => {
            this.snackBar.open(`Vous devez être admin pour accéder à cette page !`, null, {
              duration: 2000,
            });
          });
          return false;
        }
        return true;
      })
    );
  }

}
