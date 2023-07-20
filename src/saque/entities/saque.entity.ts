import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity({ name: 'saque' })
export class SaqueEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'valor', nullable: false })
  valor: number;

  @Column({ name: 'status', nullable: false })
  status: string;

  @Column({ name: 'idInvestment', nullable: false })
  idInvestment: number;

  @Column({ name: 'idAccount', nullable: false })
  idAccount: number;

  @Column({ name: 'idUser', nullable: false })
  idUser: number;

  @CreateDateColumn({ name: 'create_at', nullable: false })
  createAt: Date;

  @CreateDateColumn({ name: 'update_at', nullable: false })
  updatedAt: Date;
}
