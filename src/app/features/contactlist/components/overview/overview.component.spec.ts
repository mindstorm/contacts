import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { Contact } from 'src/app/models';
import { SharedModule } from 'src/app/modules/shared';
import { ContactsState, selectContacts } from 'src/app/store/contact.store';
import { DetailsComponent } from '../details/details.component';
import { EditDialogComponent } from '../dialog/edit-dialog.component';
import { OverviewComponent } from './overview.component';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({}),
    };
  }
}

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  let debugElement: DebugElement;

  let dialog: MatDialog;
  let location: Location;

  let store: MockStore<ContactsState>;
  let mockContactsSelector: any;

  let initalContacts: Contact[] = [
    { firstName: 'Max', lastName: 'Muster 1', phone: '', email: '', address: '', uuid: '525043a8-c2f8-4f89-8ecc-3a264f47348b' },
    { firstName: 'Max', lastName: 'Muster 2', phone: '', email: '', address: '', uuid: 'ac26dca8-014c-4fea-b3df-6027378bdcd8' },
    { firstName: 'Max', lastName: 'Muster 3', phone: '', email: '', address: '', uuid: 'ac26dca8-014c-4fea-b3df-6027378bdcd9' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewComponent, DetailsComponent, EditDialogComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: ':uuid',
            component: DetailsComponent,
          },
        ]),
        SharedModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideMockStore(),
        {
          provide: MatDialog,
          useClass: MatDialogMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    store = TestBed.inject(MockStore);
    location = TestBed.inject(Location);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    mockContactsSelector = store.overrideSelector(selectContacts, initalContacts);
    dialog = TestBed.inject(MatDialog);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the overview items', () => {
    // check observable
    component.contacts$.subscribe((data) => {
      expect(data).toBe(initalContacts);
    });

    // check list item rendering
    expect(debugElement.queryAll(By.css('.list__item')).length).toBe(initalContacts.length);
  });

  it('show empty state', () => {
    // empty selector
    mockContactsSelector.setResult([]);

    store.refreshState();
    fixture.detectChanges();

    // check observable
    component.contacts$.subscribe((data) => {
      expect(data).toBe([]);
    });

    // check message item rendering
    expect(debugElement.query(By.css('#message_empty'))).toBeTruthy();
  });

  it('click on item & change the route', fakeAsync(() => {
    // first element
    const listElement: DebugElement = debugElement.query(By.css('.list__item'));
    expect(listElement.classes).not.toHaveProperty('is-active');

    // click on the list element
    listElement.nativeElement.click();

    // wait
    tick();

    // element should be active
    expect(listElement.classes).toHaveProperty('is-active');

    expect(location.path()).toBe(`/${initalContacts[0].uuid}`);
  }));

  it('fab button click to open the dialog', () => {
    jest.spyOn(component, 'openDialog');
    jest.spyOn(dialog, 'open');

    // click button
    const button: DebugElement = debugElement.query(By.css('#button_add'));
    button.nativeElement.click();

    expect(component.openDialog).toHaveBeenCalled();
    expect(dialog.open).toHaveBeenCalled();
  });

  it('recieve data from the dialog', () => {
    const storeSpy = jest.spyOn(store, 'dispatch');

    component.openDialog();

    // value from dialog should be enriched with UUID dispatched to store
    expect(storeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: '[Contacts] Add Contact',
        contact: expect.objectContaining({
          uuid: expect.any(String),
        }),
      })
    );
  });

  it('recieve no data from the dialog', () => {
    const storeSpy = jest.spyOn(store, 'dispatch');
    const dialogSpy = jest.spyOn(dialog, 'open');

    // change the return value from the dialog
    dialogSpy.mockReturnValue({
      afterClosed: () => of(''),
    } as MatDialogRef<typeof component>);

    component.openDialog();

    // no dispatch should happen
    expect(storeSpy).not.toHaveBeenCalled();
  });
});
