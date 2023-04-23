import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Pet } from './pet.entity';
import { User } from './users.entity';

/**
 * Appointment class.
 */
@Entity('appointments')
export class Appointment extends BaseEntity {
  /** @member {number} id - the appointment's id */
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  /** @member {string} proposite - the proposite of medical appointment */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  proposite: string;

  /** @member {string} description - the description of the appointment */
  @Column({
    type: 'text',
    nullable: true,
    default: null,
  })
  description: string;

  /** @member {date} scheduleAt - date of schedule */
  @Column({
    name: 'schedule_at',
    type: 'date',
  })
  scheduleAt: Date;

  @ManyToOne(() => Pet, (pet) => pet.appointments, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({
    name: 'pet_uuid',
    referencedColumnName: 'uuid',
  })
  pet: Pet;

  @ManyToOne(() => User, (user) => user.appointments, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({
    name: 'user_uuid',
    referencedColumnName: 'uuid',
  })
  user: User;
}
