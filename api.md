# Contacts

Types:

- <code><a href="./src/resources/contacts/contacts.ts">SentDmServicesContractsDataContactDto</a></code>
- <code><a href="./src/resources/contacts/contacts.ts">ContactListResponse</a></code>

Methods:

- <code title="get /contacts">client.contacts.<a href="./src/resources/contacts/contacts.ts">list</a>({ ...params }) -> unknown</code>

## ID

Methods:

- <code title="get /contacts/{customerId}/id/{id}">client.contacts.id.<a href="./src/resources/contacts/id.ts">retrieve</a>(customerId, id) -> SentDmServicesContractsDataContactDto</code>

## Phone

Methods:

- <code title="get /contacts/{customerId}/phone/{phoneNumber}">client.contacts.phone.<a href="./src/resources/contacts/phone.ts">retrieve</a>(customerId, phoneNumber) -> SentDmServicesContractsDataContactDto</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessagePhoneNumberResponse</a></code>

Methods:

- <code title="post /messages">client.messages.<a href="./src/resources/messages.ts">create</a>({ ...params }) -> unknown</code>
- <code title="post /messages/phone-number">client.messages.<a href="./src/resources/messages.ts">phoneNumber</a>({ ...params }) -> unknown</code>

# SMS

Types:

- <code><a href="./src/resources/sms.ts">SentDmServicesContractsDataSMSPayloadDto</a></code>

Methods:

- <code title="get /sms">client.sms.<a href="./src/resources/sms.ts">list</a>({ ...params }) -> SentDmServicesContractsDataSMSPayloadDto</code>

# Whatsapp

Types:

- <code><a href="./src/resources/whatsapp.ts">SentDmServicesContractsDataWhatsappPayloadDto</a></code>

Methods:

- <code title="get /whatsapp">client.whatsapp.<a href="./src/resources/whatsapp.ts">list</a>({ ...params }) -> SentDmServicesContractsDataWhatsappPayloadDto</code>

# Templates

Types:

- <code><a href="./src/resources/templates.ts">SentDmServicesContractsResponsesTemplateResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateCreateResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateUpdateResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateListResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateDeleteResponse</a></code>

Methods:

- <code title="post /templates">client.templates.<a href="./src/resources/templates.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /templates/{customerId}/{id}">client.templates.<a href="./src/resources/templates.ts">retrieve</a>(customerId, id) -> SentDmServicesContractsResponsesTemplateResponse</code>
- <code title="put /templates/{id}">client.templates.<a href="./src/resources/templates.ts">update</a>(id, { ...params }) -> unknown</code>
- <code title="get /templates">client.templates.<a href="./src/resources/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>
- <code title="delete /templates/{customerId}/{id}">client.templates.<a href="./src/resources/templates.ts">delete</a>(customerId, id) -> unknown</code>

# Customers

Types:

- <code><a href="./src/resources/customers.ts">SentDmServicesContractsDataCustomerDto</a></code>
- <code><a href="./src/resources/customers.ts">CustomerDeleteResponse</a></code>

Methods:

- <code title="get /customers/{id}">client.customers.<a href="./src/resources/customers.ts">retrieve</a>(id) -> SentDmServicesContractsDataCustomerDto</code>
- <code title="put /customers/{id}">client.customers.<a href="./src/resources/customers.ts">update</a>(id, { ...params }) -> SentDmServicesContractsDataCustomerDto</code>
- <code title="delete /customers/{id}">client.customers.<a href="./src/resources/customers.ts">delete</a>(id) -> unknown</code>
