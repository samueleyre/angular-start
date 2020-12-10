import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyNameService {

  myName = 'Samuel';

  constructor() { }
}
