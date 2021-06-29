import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Contact } from 'src/app/models';
import { getContact, selectContact } from 'src/app/store/contact.store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  public contact$ = this.store.select(selectContact);
  public displayFields = [
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
    },
    {
      key: 'phone',
      label: 'Phone',
    },
    {
      key: 'address',
      label: 'Address',
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
}
