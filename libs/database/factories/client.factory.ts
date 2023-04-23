import { setSeederFactory } from 'typeorm-extension';
import { Client } from '../src';

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
