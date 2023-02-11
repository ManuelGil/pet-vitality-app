import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../../../../src/app.roles';
import { Appointment } from './appointment.entity';
import { BaseEntity } from './base.entity';

/**
 * User class.
 */
@Entity('users')
export class User extends BaseEntity {
  /** @member {string} uuid - the user's id */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /** @member {string} username - the username */
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  username: string;

  /** @member {string} password - the password (hash) */
  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  /** @member {string} firstName - the user's first name */
  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  firstName: string;

  /** @member {string} lastName - the user's last name */
  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  lastName: string;

  /** @member {string} phone - the contact email */
  @Column({
    type: 'varchar',
    length: 320,
    unique: true,
  })
  email: string;

  /** @member {string} phone - the contact phone */
  @Column({
    type: 'varchar',
    length: 25,
    nullable: true,
    default: null,
  })
  phone: string;

  /** @member {UserRole} role - the user's role */
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.DOCTOR,
  })
  role: UserRole;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];
}
