/* tslint:disable:variable-name */

import {TagInterface} from '../interfaces/tag';

/*
Une entité sert à avoir un object avec des propriétés qui nous aident à controller son format
par exemple : pour "parser" les valeurs avant envoie à l'API
 */
export class User {
  id?: string;
  first_name: string;
  last_name: string;
  email?: string;
  password?: string;
  tags?: TagInterface[];
  roles?: string[];

  constructor(obj?: any) {
    this.first_name = 'first_name' in obj ? obj.first_name : '';
    this.last_name = 'last_name' in obj ? obj.last_name : '';
    this.email = 'email' in obj ? obj.email : '';
    this.password = 'password' in obj ? obj.password : '';
  }
}
