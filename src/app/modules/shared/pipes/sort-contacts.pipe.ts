import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from 'src/app/models';

@Pipe({
  name: 'sortContacts',
})
export class SortContactsPipe implements PipeTransform {
  transform(contacts: Contact[]): Contact[] {
    return [...contacts].sort((a: Contact, b: Contact) => (a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1));
  }
}
