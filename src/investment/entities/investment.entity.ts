import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity({ name: 'investment' })
export class InvestmentEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'crypto', nullable: false })
  crypto: string;

  @Column({ name: 'valor', nullable: false })
  valor: number;

  @Column({ name: 'redimento' })
  redimento: number;

  @Column({ name: 'status', nullable: false })
  status: string;

  @Column({ name: 'idUser', nullable: false })
  idUser: number;

  @Column({ name: 'idYield', nullable: false })
  idYield: number;

  @CreateDateColumn({ name: 'create_at', nullable: false })
  createAt: Date;

  @CreateDateColumn({ name: 'update_at', nullable: false })
  updatedAt: Date;
}
