import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/modules/shared';
import { DetailsComponent, EditDialogComponent, OverviewComponent } from './components';
import { CONTACTLIST_ROUTES } from './contactlist.routes';

@NgModule({
  declarations: [OverviewComponent, DetailsComponent, EditDialogComponent],
  imports: [SharedModule, RouterModule.forChild(CONTACTLIST_ROUTES)],
})
export class ContactlistModule {}
