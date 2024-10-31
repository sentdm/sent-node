// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TemplatesAPI from './templates';

export class Templates extends APIResource {
  create(body: TemplateCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/templates', { body, ...options });
  }

  retrieve(
    customerId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SentDmServicesContractsResponsesTemplateResponse> {
    return this._client.get(`/templates/${customerId}/${id}`, options);
  }

  update(id: string, body: TemplateUpdateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.put(`/templates/${id}`, { body, ...options });
  }

  list(query: TemplateListParams, options?: Core.RequestOptions): Core.APIPromise<TemplateListResponse> {
    return this._client.get('/templates', { query, ...options });
  }

  delete(customerId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/templates/${customerId}/${id}`, options);
  }
}

export interface SentDmServicesContractsResponsesTemplateResponse {
  id?: string;

  category?: string;

  createdAt?: string;

  customerId?: string;

  name?: string;

  rawBody?: string;

  updatedAt?: string;

  whatsappTemplateName?: string;

  whatsappTemplateStatus?: string;
}

export type TemplateCreateResponse = unknown;

export type TemplateUpdateResponse = unknown;

export type TemplateListResponse = Array<SentDmServicesContractsResponsesTemplateResponse>;

export type TemplateDeleteResponse = unknown;

export interface TemplateCreateParams {
  customerId?: string;

  name?: string;
}

export interface TemplateUpdateParams {
  category?: string;

  customerId?: string;

  name?: string;

  rawBody?: string;
}

export interface TemplateListParams {
  customerId: string;
}

export namespace Templates {
  export import SentDmServicesContractsResponsesTemplateResponse = TemplatesAPI.SentDmServicesContractsResponsesTemplateResponse;
  export import TemplateCreateResponse = TemplatesAPI.TemplateCreateResponse;
  export import TemplateUpdateResponse = TemplatesAPI.TemplateUpdateResponse;
  export import TemplateListResponse = TemplatesAPI.TemplateListResponse;
  export import TemplateDeleteResponse = TemplatesAPI.TemplateDeleteResponse;
  export import TemplateCreateParams = TemplatesAPI.TemplateCreateParams;
  export import TemplateUpdateParams = TemplatesAPI.TemplateUpdateParams;
  export import TemplateListParams = TemplatesAPI.TemplateListParams;
}
