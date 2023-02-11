import { ProcedureCategory } from '@app/database';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(ProcedureCategory, (faker) => {
  const category = new ProcedureCategory();

  category.name = faker.name.jobArea();
  category.description = faker.name.jobDescriptor();

  return category;
});
