import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { Contact } from '../models';

export const CONTACTS_FEATURE_NAME = 'contacts';

// STATE
// --------------------------------------------------
export interface ContactsState {
  contacts: Contact[];
  selectedContact?: Contact;
}

const initialState: ContactsState = {
  contacts: environment.production
    ? []
    : [
        { firstName: 'Max', lastName: 'Zuster 1', phone: '', email: '', address: '', uuid: '525043a8-c2f8-4f89-8ecc-3a264f47348b' },
        { firstName: 'Max', lastName: 'Auster 2', phone: '', email: '', address: '', uuid: 'ac26dca8-014c-4fea-b3df-6027378bdcd8' },
        { firstName: 'Max', lastName: 'Muster 3', phone: '', email: '', address: '', uuid: 'ac26dca8-014c-4fea-b3df-6027378bdcd9' },
      ],
};

// ACTIONS
// --------------------------------------------------
export const addContact = createAction('[Contacts] Add Contact', props<{ contact: Contact }>());
export const getContact = createAction('[Contacts] Get Contact', props<{ uuid: string }>());

// REDUCERS
// --------------------------------------------------
export const contactsReducer = createReducer<ContactsState>(
  initialState,

  on(addContact, (state, { contact }) => ({
    ...state,
    contacts: state.contacts.concat(contact),
  })),

  on(getContact, (state, { uuid }) => ({
    ...state,
    selectedContact: state.contacts.find((contact) => contact.uuid === uuid),
  }))
);

// SELECTORS
// --------------------------------------------------
const contactsFeatureSelector = createFeatureSelector<ContactsState>(CONTACTS_FEATURE_NAME);

export const selectContacts = createSelector(contactsFeatureSelector, (contactsState) => contactsState.contacts);
export const selectContact = createSelector(contactsFeatureSelector, (contactsState) => contactsState.selectedContact);
