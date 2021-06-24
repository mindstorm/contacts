import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRippleModule } from '@angular/material/core';

const MODULES = [CommonModule, MatRippleModule];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES],
})
export class SharedModule {}
