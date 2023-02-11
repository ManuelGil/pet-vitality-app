import { User } from '@app/database';
import { hash } from 'bcrypt';
import { UserRole } from 'src/app.roles';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(User);

    const data = {
      firstName: 'James',
      lastName: 'Howlett',
      username: 'doctor',
      email: 'doctor@example.com',
      password: await hash('123456789', 10),
      role: UserRole.DOCTOR,
    };

    const user = await repository.findOneBy({ username: data.username });

    if (!user) {
      await repository.insert([data]);
    }

    // ---------------------------------------------------

    const userFactory = await factoryManager.get(User);
    // save 10 factory generated entities, to the database
    await userFactory.saveMany(10);
  }
}
