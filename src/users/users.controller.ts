import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common/pipes/parse-uuid.pipe';
import { ApiTags } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

/**
 * UsersController class.
 */
@ApiTags('users')
@Controller('users')
export class UsersController {
  /**
   * This is the constructor method.
   *
   * @param {UsersService} usersService - injects the UsersService.
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * This method created a new user.
   *
   * @param {CreateUserDto} createUserDto - contains the user's information.
   * @returns - the new user.
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /**
   * This method gets all users.
   *
   * @returns - all users.
   */
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * This method gets an user.
   *
   * @param {string} uuid - the user's id.
   * @returns - the user.
   */
  @Get(':uuid')
  findOne(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.usersService.findOne(uuid);
  }

  /**
   * This method updates an user.
   *
   * @param {string} uuid - the user's id.
   * @param {UpdateUserDto} updateUserDto - contains the user's information.
   * @returns - the user.
   */
  @Patch(':uuid')
  update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(uuid, updateUserDto);
  }

  /**
   * This method deletes an user.
   *
   * @param uuid - the user's id.
   * @returns - the operation result.
   */
  @Delete(':uuid')
  remove(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.usersService.remove(uuid);
  }
}
