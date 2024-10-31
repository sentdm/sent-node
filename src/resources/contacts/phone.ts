// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Phone extends APIResource {
  retrieve(
    customerId: string,
    phoneNumber: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contact> {
    return this._client.get(`/contact/${customerId}/phone/${phoneNumber}`, options);
  }
}
