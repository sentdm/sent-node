// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ContactsAPI from './contacts';

export class Phone extends APIResource {
  retrieve(
    customerId: string,
    phoneNumber: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactsAPI.SentDmServicesContractsDataContactDto> {
    return this._client.get(`/contacts/${customerId}/phone/${phoneNumber}`, options);
  }
}
