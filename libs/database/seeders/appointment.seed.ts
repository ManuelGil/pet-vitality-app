import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Appointment, Pet, User } from '../src';

export default class AppointmentSeeder implements Seeder {
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

    const userRepository = dataSource.getRepository(User);

    const user = await userRepository.findOneBy({ username: 'doctor' });

    const appointmentFactory = await factoryManager.get(Appointment);
    await appointmentFactory.saveMany(3, { pet, user });
  }
}
