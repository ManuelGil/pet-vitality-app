import { dataSource } from '../../../config/orm.config';

async function clearDatabase() {
  await dataSource.initialize();

  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.startTransaction();

  try {
    await queryRunner.query('TRUNCATE TABLE "users" CASCADE');
    await queryRunner.query('TRUNCATE TABLE "clients" CASCADE');
    await queryRunner.query('TRUNCATE TABLE "pets" CASCADE');
    await queryRunner.query('TRUNCATE TABLE "appointments" CASCADE');
    await queryRunner.query('TRUNCATE TABLE "procedure_categories" CASCADE');
    await queryRunner.query('TRUNCATE TABLE "procedures" CASCADE');

    await queryRunner.commitTransaction();
  } catch (err) {
    console.error(err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
}

clearDatabase().then(() => console.log('Database cleared!'));
