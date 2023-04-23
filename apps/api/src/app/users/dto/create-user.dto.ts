import { UserRole } from '@app/database';
import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * CreateUserDto class.
 */
export class CreateUserDto {
  /** @member {string} uuid - the */
  @IsUUID()
  @IsNotEmpty()
  uuid: string;

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
  @IsNotEmpty()
  @MaxLength(100)
  username: string;

  /** @member {string} email - the email */
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(320)
  email: string;

  /** @member {string} password - the password */
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  /** @member {string} phone - the phone */
  @IsString()
  @IsOptional()
  @MaxLength(25)
  phone: string;

  /** @member {UserRole} role - the role */
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
}
