import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity({ name: 'yield' })
export class YieldEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'crypto', nullable: false })
  crypto: string;

  @Column({ name: 'min', nullable: false })
  min: number;

  @Column({ name: 'max' })
  max: number;

  @Column({ name: 'redimentoDia', nullable: false })
  redimentoDia: number;

  @Column({ name: 'idCripto', nullable: false })
  idCripto: number;

  @CreateDateColumn({ name: 'create_at', nullable: false })
  createAt: Date;

  @CreateDateColumn({ name: 'update_at', nullable: false })
  updatedAt: Date;
}
