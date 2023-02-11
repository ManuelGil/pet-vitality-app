import { Procedure } from '@app/database';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Procedure, (faker) => {
  const procedure = new Procedure();

  procedure.diagnostic = faker.lorem.text();
  procedure.treatment = faker.lorem.text();
  procedure.description = faker.lorem.text();

  return procedure;
});
