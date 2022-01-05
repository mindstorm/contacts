import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { SharedModule } from 'src/app/modules/shared';
import { DetailsComponent, EditDialogComponent, OverviewComponent } from './components';
import { CONTACTLIST_ROUTES } from './contactlist.routes';

@NgModule({
  declarations: [OverviewComponent, DetailsComponent, EditDialogComponent],
  imports: [SharedModule, RouterModule.forChild(CONTACTLIST_ROUTES)],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
})
export class ContactlistModule {}
