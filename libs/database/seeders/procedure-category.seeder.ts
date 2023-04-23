import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { ProcedureCategory } from '../src';

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
