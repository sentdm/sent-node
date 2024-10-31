// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ContactsAPI from './contacts';
import * as IDAPI from './id';
import * as PhoneAPI from './phone';

export class Contacts extends APIResource {
  id: IDAPI.ID = new IDAPI.ID(this._client);
  phone: PhoneAPI.Phone = new PhoneAPI.Phone(this._client);

  list(query: ContactListParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/contacts', { query, ...options });
  }
}

export type ContactListResponse = unknown;

export interface ContactListParams {
  customerId: string;

  page: number;

  pageSize: number;
}

export namespace Contacts {
  export import ContactListResponse = ContactsAPI.ContactListResponse;
  export import ContactListParams = ContactsAPI.ContactListParams;
  export import ID = IDAPI.ID;
  export import Phone = PhoneAPI.Phone;
}
