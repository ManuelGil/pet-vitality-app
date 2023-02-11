import { PartialType } from '@nestjs/mapped-types';
import {
  IsAlphanumeric,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

/**
 * UpdateUserDto class.
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  /** @member {string} firstName - the first name */
  @IsString()
  @IsOptional()
  @MaxLength(100)
  firstName: string;

  /** @member {string} lastName - the last name */
  @IsString()
  @IsOptional()
  @MaxLength(100)
  lastName: string;

  /** @member {string} username - the user name */
  @IsAlphanumeric()
  @IsOptional()
  @MaxLength(100)
  username: string;

  /** @member {string} email - the email */
  @IsEmail()
  @IsOptional()
  @MaxLength(320)
  email: string;

  /** @member {string} password - the password */
  @IsString()
  @IsOptional()
  @MinLength(8)
  password: string;

  /** @member {string} phone - the phone */
  @IsString()
  @IsOptional()
  @MaxLength(25)
  phone: string;
}
