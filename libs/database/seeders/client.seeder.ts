import { Client } from '@app/database';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class ClientSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(Client);

    const data = {
      uuid: '67d1685d-acae-4f97-89ce-105e4da5c52f',
      firstName: 'Laura',
      lastName: 'Kinney',
      email: 'client@example.com',
    };

    const client = await repository.findOneBy({ uuid: data.uuid });

    if (!client) {
      await repository.insert([data]);
    }

    // ---------------------------------------------------

    const clientFactory = await factoryManager.get(Client);
    // save 20 factory generated entities, to the database
    await clientFactory.saveMany(20);
  }
}
