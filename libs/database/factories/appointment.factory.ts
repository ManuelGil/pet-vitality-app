import { setSeederFactory } from 'typeorm-extension';
import { Appointment } from '../src';

export default setSeederFactory(Appointment, (faker) => {
  const appointment = new Appointment();

  appointment.proposite = faker.lorem.sentence();
  appointment.description = faker.lorem.text();
  appointment.scheduleAt = faker.date.future();

  return appointment;
});
