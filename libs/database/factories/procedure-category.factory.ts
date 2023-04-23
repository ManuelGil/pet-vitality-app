import { setSeederFactory } from 'typeorm-extension';
import { ProcedureCategory } from '../src';

export default setSeederFactory(ProcedureCategory, (faker) => {
  const category = new ProcedureCategory();

  category.name = faker.name.jobArea();
  category.description = faker.name.jobDescriptor();

  return category;
});
