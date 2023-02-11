import { DataSource } from 'typeorm';
import { runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension';
import {
  appointmentFactory,
  clientFactory,
  petFactory,
  procedureCategoryFactory,
  procedureFactory,
  userFactory,
} from '../factories';
import AppointmentSeeder from './appointment.seed';
import ClientSeeder from './client.seeder';
import PetSeeder from './pet.seeder';
import ProcedureCategorySeeder from './procedure-category.seeder';
import ProcedureSeeder from './procedure.seeder';
import UserSeeder from './user.seeder';

export default class InitSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [
        ClientSeeder,
        PetSeeder,
        UserSeeder,
        AppointmentSeeder,
        ProcedureCategorySeeder,
        ProcedureSeeder,
      ],
      factories: [
        clientFactory,
        petFactory,
        userFactory,
        appointmentFactory,
        procedureCategoryFactory,
        procedureFactory,
      ],
    });
  }
}
