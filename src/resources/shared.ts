// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as SMSAPI from './sms';
import * as WhatsappAPI from './whatsapp';

export interface SentDmServicesContractsDataContactDto {
  id?: string;

  availableChannels?: string;

  countryCode?: string;

  createdAt?: string;

  customerId?: string | null;

  defaultChannel?: string;

  nationalFormat?: string;

  phoneNumber?: string;

  smsPayloadDTO?: SMSAPI.SentDmServicesContractsDataSMSPayloadDto;

  updatedAt?: string;

  verified?: boolean;

  whatsappPayloadDTO?: WhatsappAPI.SentDmServicesContractsDataWhatsappPayloadDto;
}
