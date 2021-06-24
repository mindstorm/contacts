import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsComponent, OverviewComponent } from './components';
import { CONTACTLIST_ROUTES } from './contactlist.routes';

@NgModule({
  declarations: [OverviewComponent, DetailsComponent],
  imports: [CommonModule, RouterModule.forChild(CONTACTLIST_ROUTES)],
})
export class ContactlistModule {}
