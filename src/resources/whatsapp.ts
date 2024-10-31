// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as WhatsappAPI from './whatsapp';

export class Whatsapp extends APIResource {
  list(
    query: WhatsappListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SentDmServicesContractsDataWhatsappPayloadDto> {
    return this._client.get('/whatsapp', { query, ...options });
  }
}

export interface SentDmServicesContractsDataWhatsappPayloadDto {
  id?: string;

  countryCode?: string;

  createdAt?: string;

  invalidRecord?: boolean;

  isBusiness?: boolean;

  numberType?: string;

  payload?: string;

  phoneNumber?: string;

  profilePicture?: string;

  sentId?: string | null;

  updatedAt?: string;

  whatsappId?: string;
}

export interface WhatsappListParams {
  phoneNumber: string;

  retrieveIfDoesNotExists: boolean;

  sentId?: string | null;
}

export namespace Whatsapp {
  export import SentDmServicesContractsDataWhatsappPayloadDto = WhatsappAPI.SentDmServicesContractsDataWhatsappPayloadDto;
  export import WhatsappListParams = WhatsappAPI.WhatsappListParams;
}
