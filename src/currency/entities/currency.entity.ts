import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity({ name: 'currency' })
export class CurrencyEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'acronimo', nullable: false })
  acronimo: string;

  @Column({ name: 'valor' })
  valor: number;

  @CreateDateColumn({ name: 'create_at', nullable: false })
  createAt: Date;

  @CreateDateColumn({ name: 'update_at', nullable: false })
  updatedAt: Date;
}
