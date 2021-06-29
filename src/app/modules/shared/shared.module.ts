import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

const MODULES = [CommonModule, MatRippleModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES],
})
export class SharedModule {}
