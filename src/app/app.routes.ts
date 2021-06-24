import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/features/contactlist/contactlist.module').then(({ ContactlistModule }) => ContactlistModule),
  },
];
