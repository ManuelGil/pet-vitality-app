import { setSeederFactory } from 'typeorm-extension';
import { Procedure } from '../src';

export default setSeederFactory(Procedure, (faker) => {
  const procedure = new Procedure();

  procedure.diagnostic = faker.lorem.text();
  procedure.treatment = faker.lorem.text();
  procedure.description = faker.lorem.text();

  return procedure;
});
