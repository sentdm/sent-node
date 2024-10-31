// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sent from 'sent';
import { Response } from 'node-fetch';

const client = new Sent({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sms', () => {
  test('list: only required params', async () => {
    const responsePromise = client.sms.list({ phoneNumber: 'phoneNumber', retrieveIfDoesNotExists: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.sms.list({
      phoneNumber: 'phoneNumber',
      retrieveIfDoesNotExists: true,
      sentId: 'sentId',
    });
  });
});
