import { Pet, PetGender } from '@app/database';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Pet, async (faker) => {
  const pet = new Pet();

  pet.name = faker.name.firstName();
  pet.gender = faker.helpers.arrayElement([PetGender.F, PetGender.M]);
  pet.birht = faker.date.birthdate();
  pet.photo = faker.image.animals();

  return pet;
});
