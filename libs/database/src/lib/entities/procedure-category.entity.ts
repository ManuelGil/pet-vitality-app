import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Procedure } from './procedure.entity';

/**
 * ProcedureCategory class.
 */
@Entity('procedure_categories')
export class ProcedureCategory extends BaseEntity {
  /** @member {number} id - the category's id */
  @PrimaryGeneratedColumn()
  id: number;

  /** @member {string} name - the category's name */
  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;

  /** @member {string} description - the description */
  @Column({
    type: 'text',
    nullable: true,
    default: null,
  })
  description: string;

  @OneToMany(() => Procedure, (procedure) => procedure.category)
  procedures: Procedure[];
}
