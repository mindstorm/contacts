import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { getContact, selectContact } from 'src/app/store/contact.store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  public id!: string;

  public contact$ = this.store.select(selectContact);

  constructor(private readonly route: ActivatedRoute, private readonly store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.store.dispatch(getContact({ uuid: params.uuid }));
    });
  }
}
