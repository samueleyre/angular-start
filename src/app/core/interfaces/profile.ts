import {Tag} from '@angular/compiler/src/i18n/serializers/xml_helper';

export interface ProfileInterface {
  first_name: string;
  last_name: string;
  tags: Tag[];
}
