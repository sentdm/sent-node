// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ContactsAPI from './contacts';

export class ID extends APIResource {
  retrieve(
    customerId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactsAPI.SentDmServicesContractsDataContactDto> {
    return this._client.get(`/contacts/${customerId}/id/${id}`, options);
  }
}
