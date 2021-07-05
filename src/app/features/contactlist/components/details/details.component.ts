import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { getContact, selectContact } from 'src/app/store/contact.store';

interface DisplayField {
  key: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  public contact$ = this.store.select(selectContact);
  public displayFields: DisplayField[] = [
    {
      key: 'firstName',
      label: 'First Name',
    },
    {
      key: 'lastName',
      label: 'Last Name',
    },
    {
      key: 'email',
      label: 'E-Mail',
      icon: 'mail',
    },
    {
      key: 'phone',
      label: 'Phone',
      icon: 'phone',
    },
    {
      key: 'address',
      label: 'Address',
      icon: 'place',
    },
  ];

  constructor(private readonly route: ActivatedRoute, private readonly store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.store.dispatch(getContact({ uuid: params.uuid }));
    });
  }

  public getValue(item: any, attr: string) {
    return item[attr] !== '' ? item[attr] : '-';
  }

  public fieldTrackBy(index: number, field: DisplayField) {
    return field.key;
  }
}
