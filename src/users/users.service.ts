import { User } from '@app/database';
import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * UsersService class.
 */
@Injectable()
export class UsersService {
  /**
   * This is the constructor method.
   *
   * @param {Repository} userRepository - injects a repository.
   */
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * This method creates a new user.
   *
   * @param {CreateUserDto} createUserDto  - contains the user's information.
   * @returns - the new user.
   */
  async create(createUserDto: CreateUserDto) {
    let user = await this.userRepository.findOneBy({
      uuid: createUserDto.uuid,
    });

    if (!user) {
      user = this.userRepository.create(createUserDto);
    } else {
      this.userRepository.merge(user, createUserDto);
    }

    return this.userRepository.save(user);
  }

  /**
   * This method gets all users.
   *
   * @returns - all users.
   */
  async findAll() {
    const [result, total] = await this.userRepository.findAndCount({
      order: { createdAt: 'DESC' },
    });

    return {
      data: result,
      count: total,
    };
  }

  /**
   * This method gets an user.
   *
   * @param {string} uuid - the user's id.
   * @returns - the user.
   */
  async findOne(uuid: string) {
    const user = await this.userRepository.findBy({ uuid });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  /**
   * This method updates an user.
   *
   * @param {string} uuid - the user's id.
   * @param {UpdateUserDto} updateCompanyDto - contains the user's information.
   * @returns - the user.
   */
  async update(uuid: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ uuid });

    if (!user) {
      throw new NotFoundException();
    }

    this.userRepository.merge(user, updateUserDto);

    return this.userRepository.save(user);
  }

  /**
   * This method deletes an user
   *
   * @param {string} uuid - the user's id.
   * @returns - the operation result.
   */
  async remove(uuid: string) {
    return await this.userRepository.softDelete(uuid);
  }
}
