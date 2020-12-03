import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

// service pour bloquer les pages quand on est pas connecté

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {



  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // vérifier qu'on est bien connecté

    return undefined;
  }
}
