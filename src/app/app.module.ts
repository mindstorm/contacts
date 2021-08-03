import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { buildModules } from './build-specifics';
import { CONTACTS_FEATURE_NAME, contactsReducer } from './store/contact.store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({ [CONTACTS_FEATURE_NAME]: contactsReducer }),
    buildModules, // Instrumentation must be imported after importing StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
