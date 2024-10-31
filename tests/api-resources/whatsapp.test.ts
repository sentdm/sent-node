// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sent from 'sent';
import { Response } from 'node-fetch';

const client = new Sent({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource whatsapp', () => {
  test('list: only required params', async () => {
    const responsePromise = client.whatsapp.list({
      phoneNumber: 'phoneNumber',
      retrieveIfDoesNotExists: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.whatsapp.list({
      phoneNumber: 'phoneNumber',
      retrieveIfDoesNotExists: true,
      sentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
