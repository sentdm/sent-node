// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ContactsAPI from './contacts';

export class Contacts extends APIResource {
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
}
