import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Appointment } from './appointment.entity';
import { BaseEntity } from './base.entity';
import { Client } from './client.entity';
import { Procedure } from './procedure.entity';

/**
 * The genders are defined.
 *
 * @enum
 */
export enum PetGender {
  F = 'female',
  M = 'male',
}

/**
 * Pet class.
 */
@Entity('pets')
export class Pet extends BaseEntity {
  /** @member {string} uuid - the pet's id */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /** @member {string} name - the pet's name */
  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;

  /** @member {string} race - the pet's race */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  race: string;

  /** @member {PetGender} gender - the pet's gender */
  @Column({
    type: 'enum',
    enum: PetGender,
    default: PetGender.F,
  })
  gender: PetGender;

  /** @member {Date} birht - the birth date */
  @Column({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  birht: Date;

  /** @member {string} photo - the client's photo */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: null,
  })
  photo: string;

  @ManyToOne(() => Client, (client) => client.pets, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({
    name: 'client_uuid',
    referencedColumnName: 'uuid',
  })
  client: Client;

  @OneToMany(() => Appointment, (appointment) => appointment.pet)
  appointments: Appointment[];

  @OneToMany(() => Procedure, (procedure) => procedure.pet)
  procedures: Procedure[];
}
