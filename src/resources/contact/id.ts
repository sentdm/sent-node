// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class ID extends APIResource {
  retrieve(
    customerId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SentDmServicesContractsDataContactDto> {
    return this._client.get(`/contact/${customerId}/id/${id}`, options);
  }
}
