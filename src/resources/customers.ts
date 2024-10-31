// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CustomersAPI from './customers';

export class Customers extends APIResource {
  retrieve(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SentDmServicesContractsDataCustomerDto> {
    return this._client.get(`/customers/${id}`, options);
  }

  update(
    id: string,
    body: CustomerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SentDmServicesContractsDataCustomerDto> {
    return this._client.put(`/customers/${id}`, { body, ...options });
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/customers/${id}`, options);
  }
}

export interface SentDmServicesContractsDataCustomerDto {
  id?: string;

  createdAt?: string;

  name?: string;

  sendingPhoneNumber?: string;

  smsBearerToken?: string;

  smsDefaultWebhookUrl?: string;

  smsMessagingProfileId?: string;

  smsWebhookFailoverUrl?: string;

  updatedAt?: string;

  whatsappBusinessAssociateId?: string;

  whatsappPhoneNumberId?: string;

  whatsappSystemUserAccessToken?: string;
}

export type CustomerDeleteResponse = unknown;

export interface CustomerUpdateParams {
  customer?: SentDmServicesContractsDataCustomerDto;
}

export namespace Customers {
  export import SentDmServicesContractsDataCustomerDto = CustomersAPI.SentDmServicesContractsDataCustomerDto;
  export import CustomerDeleteResponse = CustomersAPI.CustomerDeleteResponse;
  export import CustomerUpdateParams = CustomersAPI.CustomerUpdateParams;
}
