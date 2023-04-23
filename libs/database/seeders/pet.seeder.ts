import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Client, Pet } from '../src';

export default class PetSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(Client);

    const client = await repository.findOneBy({
      uuid: '67d1685d-acae-4f97-89ce-105e4da5c52f',
    });

    const petFactory = await factoryManager.get(Pet);
    // save 2 factory generated entities, to the database
    await petFactory.saveMany(2, { client });
  }
}
