import { Component } from '@angular/core';
import {AuthService} from './core/services/auth.service';

@Component({
  selector: 'app-epsi',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogged$ = AuthService.isLogged$;

  constructor() {}
}
