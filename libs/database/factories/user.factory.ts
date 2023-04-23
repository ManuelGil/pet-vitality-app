import { hash } from 'bcrypt';
import { setSeederFactory } from 'typeorm-extension';
import { User, UserRole } from '../src';

export default setSeederFactory(User, async (faker) => {
  const user = new User();

  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.username = faker.internet
    .userName(user.firstName, user.lastName)
    .toLowerCase();
  user.email = faker.internet
    .email(user.firstName, user.lastName)
    .toLowerCase();
  user.password = await hash(faker.internet.password(), 10);
  user.phone = faker.phone.number();
  user.role = faker.helpers.arrayElement([UserRole.ADMIN, UserRole.DOCTOR]);

  return user;
});
