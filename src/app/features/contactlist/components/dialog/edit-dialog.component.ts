import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: 'edit-dialog.component.html',
})
export class EditDialogComponent {
  public editForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>) {}
}
