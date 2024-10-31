// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as MessagesAPI from './messages';

export class Messages extends APIResource {
  create(body: MessageCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/messages', { body, ...options });
  }

  phoneNumber(body: MessagePhoneNumberParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/messages/phone-number', { body, ...options });
  }
}

export type MessageCreateResponse = unknown;

export type MessagePhoneNumberResponse = unknown;

export interface MessageCreateParams {
  contactId?: string;

  customerId?: string;

  templateId?: string;
}

export interface MessagePhoneNumberParams {
  customerId?: string;

  phoneNumber?: string;

  templateId?: string;
}

export namespace Messages {
  export import MessageCreateResponse = MessagesAPI.MessageCreateResponse;
  export import MessagePhoneNumberResponse = MessagesAPI.MessagePhoneNumberResponse;
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
  export import MessagePhoneNumberParams = MessagesAPI.MessagePhoneNumberParams;
}
