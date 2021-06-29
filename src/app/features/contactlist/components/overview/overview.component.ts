import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Contact } from 'src/app/models';
import { EditDialogComponent } from './../dialog/edit-dialog.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result: Contact) => {
      console.log(result);
    });
  }
}
