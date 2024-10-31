// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * API Key for accessing the Sent DM Core API
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['SENT_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Sent API.
 */
export class Sent extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Sent API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['X_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['SENT_BASE_URL'] ?? https://sent-dm-dev.azurewebsites.net] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('SENT_BASE_URL'),
    apiKey = Core.readEnv('X_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.SentError(
        "The X_API_KEY environment variable is missing or empty; either provide it, or instantiate the Sent client with an apiKey option, like new Sent({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://sent-dm-dev.azurewebsites.net`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  contact: API.Contact = new API.Contact(this);
  contacts: API.Contacts = new API.Contacts(this);
  messages: API.Messages = new API.Messages(this);
  sms: API.SMS = new API.SMS(this);
  whatsapp: API.Whatsapp = new API.Whatsapp(this);
  templates: API.Templates = new API.Templates(this);
  customers: API.Customers = new API.Customers(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'x-api-key': this.apiKey };
  }

  static Sent = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static SentError = Errors.SentError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  SentError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Sent {
  export import RequestOptions = Core.RequestOptions;

  export import Contact = API.Contact;

  export import Contacts = API.Contacts;
  export import ContactListResponse = API.ContactListResponse;
  export import ContactListParams = API.ContactListParams;

  export import Messages = API.Messages;
  export import MessageCreateResponse = API.MessageCreateResponse;
  export import MessagePhoneNumberResponse = API.MessagePhoneNumberResponse;
  export import MessageCreateParams = API.MessageCreateParams;
  export import MessagePhoneNumberParams = API.MessagePhoneNumberParams;

  export import SMS = API.SMS;
  export import SentDmServicesContractsDataSMSPayloadDto = API.SentDmServicesContractsDataSMSPayloadDto;
  export import SMSListParams = API.SMSListParams;

  export import Whatsapp = API.Whatsapp;
  export import SentDmServicesContractsDataWhatsappPayloadDto = API.SentDmServicesContractsDataWhatsappPayloadDto;
  export import WhatsappListParams = API.WhatsappListParams;

  export import Templates = API.Templates;
  export import SentDmServicesContractsResponsesTemplateResponse = API.SentDmServicesContractsResponsesTemplateResponse;
  export import TemplateCreateResponse = API.TemplateCreateResponse;
  export import TemplateUpdateResponse = API.TemplateUpdateResponse;
  export import TemplateListResponse = API.TemplateListResponse;
  export import TemplateDeleteResponse = API.TemplateDeleteResponse;
  export import TemplateCreateParams = API.TemplateCreateParams;
  export import TemplateUpdateParams = API.TemplateUpdateParams;
  export import TemplateListParams = API.TemplateListParams;

  export import Customers = API.Customers;
  export import SentDmServicesContractsDataCustomerDto = API.SentDmServicesContractsDataCustomerDto;
  export import CustomerDeleteResponse = API.CustomerDeleteResponse;
  export import CustomerUpdateParams = API.CustomerUpdateParams;

  export import SentDmServicesContractsDataContactDto = API.SentDmServicesContractsDataContactDto;
}

export default Sent;
