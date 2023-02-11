import { Pet, Procedure, ProcedureCategory } from '@app/database';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class ProcedureSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const petRepository = dataSource.getRepository(Pet);

    const pet = await petRepository
      .createQueryBuilder('pets')
      .leftJoinAndSelect('pets.client', 'clients')
      .where('clients.uuid = :uuid', {
        uuid: '67d1685d-acae-4f97-89ce-105e4da5c52f',
      })
      .getOne();

    const categoryRepository = dataSource.getRepository(ProcedureCategory);

    const category = await categoryRepository.findOneBy({ id: 1 });

    const procedureFactory = await factoryManager.get(Procedure);
    // save 1 factory generated entities, to the database
    await procedureFactory.saveMany(1, { pet, category });
  }
}
