import { Client } from '@app/database';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Client, (faker) => {
  const client = new Client();

  client.firstName = faker.name.firstName();
  client.lastName = faker.name.lastName();
  client.email = faker.internet
    .email(client.firstName, client.lastName)
    .toLowerCase();
  client.phone = faker.phone.number();
  client.address = faker.address.streetAddress();
  client.addressDetails = faker.address.secondaryAddress();

  return client;
});
