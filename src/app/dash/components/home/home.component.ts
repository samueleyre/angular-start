import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/entities/user';
import {AuthService} from '../../../core/services/auth.service';
import {MatchService} from '../../../core/services/match.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  matchs$: Observable<User[]> = this.matchService.matchs$().pipe(
    tap(val => console.log({val}),
  ));

  constructor(
    private matchService: MatchService,
  ) {
  }

  // on récupère l'utilisateur connecté
  get user(): User {
    return AuthService.user;
  }

  ngOnInit() {
  }

}
