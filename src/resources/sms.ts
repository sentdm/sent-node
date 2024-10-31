// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SMSAPI from './sms';

export class SMS extends APIResource {
  list(
    query: SMSListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SentDmServicesContractsDataSMSPayloadDto> {
    return this._client.get('/sms', { query, ...options });
  }
}

export interface SentDmServicesContractsDataSMSPayloadDto {
  id?: string;

  countryCode?: string;

  createdAt?: string;

  nationalFormat?: string;

  payload?: string;

  phoneNumber?: string;

  sentId?: string | null;

  updatedAt?: string;

  validNumber?: boolean;
}

export interface SMSListParams {
  phoneNumber: string;

  retrieveIfDoesNotExists: boolean;

  sentId?: string | null;
}

export namespace SMS {
  export import SentDmServicesContractsDataSMSPayloadDto = SMSAPI.SentDmServicesContractsDataSMSPayloadDto;
  export import SMSListParams = SMSAPI.SMSListParams;
}
