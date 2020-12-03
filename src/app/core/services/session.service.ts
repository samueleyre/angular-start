import { Injectable } from '@angular/core';
import {CoreModule} from '../core.module';

// stocker la session en localstorage

@Injectable({
  providedIn: CoreModule
})
export class SessionService {
  public token: string;

  constructor() {}

  public set(token: string): void {
    localStorage.setItem('token', token);
  }
  public get(): string {
    return localStorage.getItem('token');
  }

  public clear(): void {
    localStorage.removeItem('token');
  }
}
