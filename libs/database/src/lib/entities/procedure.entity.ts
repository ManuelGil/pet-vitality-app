import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Pet } from './pet.entity';
import { ProcedureCategory } from './procedure-category.entity';

/**
 * Procedure class.
 */
@Entity('procedures')
export class Procedure extends BaseEntity {
  /** @member {number} id - the procedure's id */
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  /** @member {string} diagnostic - the diagnostic */
  @Column({
    type: 'text',
    nullable: true,
    default: null,
  })
  diagnostic: string;

  /** @member {string} treatment - the treatment */
  @Column({
    type: 'text',
    nullable: true,
    default: null,
  })
  treatment: string;

  /** @member {string} description - the description */
  @Column({
    type: 'text',
    nullable: true,
    default: null,
  })
  description: string;

  @ManyToOne(() => ProcedureCategory, (category) => category.procedures, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({
    name: 'category_id',
    referencedColumnName: 'id',
  })
  category: ProcedureCategory;

  @ManyToOne(() => Pet, (pet) => pet.procedures, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({
    name: 'pet_uuid',
    referencedColumnName: 'uuid',
  })
  pet: Pet;
}
