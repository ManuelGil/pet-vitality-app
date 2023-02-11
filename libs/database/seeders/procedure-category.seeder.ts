import { ProcedureCategory } from '@app/database';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class ProcedureCategorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const categoryFactory = await factoryManager.get(ProcedureCategory);
    // save 2 factory generated entities, to the database
    await categoryFactory.saveMany(2);
  }
}
