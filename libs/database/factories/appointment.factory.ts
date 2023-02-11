import { Appointment } from '@app/database';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Appointment, (faker) => {
  const appointment = new Appointment();

  appointment.proposite = faker.lorem.sentence();
  appointment.description = faker.lorem.text();
  appointment.scheduleAt = faker.date.future();

  return appointment;
});
