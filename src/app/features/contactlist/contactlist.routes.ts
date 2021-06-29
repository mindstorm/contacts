import { Routes } from '@angular/router';

import { DetailsComponent, OverviewComponent } from './components';

export const CONTACTLIST_ROUTES: Routes = [
  {
    path: '',
    component: OverviewComponent,
    children: [
      {
        path: ':uuid',
        component: DetailsComponent,
      },
    ],
  },
];
