// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as IDAPI from './id';
import * as PhoneAPI from './phone';

export class Contact extends APIResource {
  id: IDAPI.ID = new IDAPI.ID(this._client);
  phone: PhoneAPI.Phone = new PhoneAPI.Phone(this._client);
}

export namespace Contact {
  export import ID = IDAPI.ID;
  export import Phone = PhoneAPI.Phone;
}
