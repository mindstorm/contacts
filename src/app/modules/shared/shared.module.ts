import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { SortContactsPipe } from './pipes';

const MODULES = [CommonModule, MatRippleModule, MatButtonModule, MatDialogModule, ReactiveFormsModule, MatInputModule];
const DECLARATIONS = [SortContactsPipe];

@NgModule({
  declarations: [DECLARATIONS],
  imports: [MODULES],
  exports: [MODULES, DECLARATIONS],
})
export class SharedModule {}
