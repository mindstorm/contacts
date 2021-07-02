import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

import { Contact } from 'src/app/models';
import { addContact, selectContacts } from 'src/app/store/contact.store';
import { EditDialogComponent } from './../dialog/edit-dialog.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  public contacts$ = this.store.select(selectContacts);

  constructor(public readonly dialog: MatDialog, private readonly store: Store) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((contact: Contact) => {
      if (contact) {
        contact.uuid = uuidv4();

        this.store.dispatch(addContact({ contact }));
      }
    });
  }
}
