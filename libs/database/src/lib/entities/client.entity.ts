import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Pet } from './pet.entity';

/**
 * Client class.
 */
@Entity('clients')
export class Client extends BaseEntity {
  /** @member {string} uuid - the client's id */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /** @member {string} firstName - the client's first name */
  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  firstName: string;

  /** @member {string} lastName - the client's last name */
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

  /** @member {string} address - the client's address */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  address: string;

  /** @member {string} addressDetails - the details of address */
  @Column({
    name: 'address_details',
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  addressDetails: string;

  @OneToMany(() => Pet, (pet) => pet.client)
  pets: Pet;
}
