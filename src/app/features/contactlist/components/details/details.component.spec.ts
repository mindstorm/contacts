import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { Contact } from 'src/app/models';
import { SharedModule } from 'src/app/modules/shared';
import { ContactsState, selectContact } from 'src/app/store/contact.store';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let debugElement: DebugElement;

  let store: MockStore<ContactsState>;
  let mockContactSelector: any;

  const initalContact: Contact = {
    firstName: 'Max',
    lastName: 'Muster 1',
    phone: '',
    email: '',
    address: '',
    uuid: '525043a8-c2f8-4f89-8ecc-3a264f47348b',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [DetailsComponent],
    imports: [RouterTestingModule, SharedModule],
    providers: [provideMockStore()],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    store = TestBed.inject(MockStore);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    mockContactSelector = store.overrideSelector(selectContact, initalContact);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get the details', () => {
    // check observable
    component.contact$.subscribe((data) => {
      expect(data).toBe(initalContact);
    });

    // check display-field rendering
    expect(fixture.debugElement.queryAll(By.css('.display-field')).length).toBe(component.displayFields.length);
  });

  it('get display-field value', () => {
    const item = {
      foo: 'bar',
      bar: '',
    };

    // value
    expect(component.getValue(item, 'foo')).toBe('bar');

    // empty value
    expect(component.getValue(item, 'bar')).toBe('-');
  });

  it('show empty state', () => {
    // empty selector
    mockContactSelector.setResult();

    store.refreshState();
    fixture.detectChanges();

    // check observable
    component.contact$.subscribe((data) => {
      expect(data).toBeUndefined();
    });

    // check message item rendering
    expect(debugElement.query(By.css('#message_empty'))).toBeTruthy();
  });
});
