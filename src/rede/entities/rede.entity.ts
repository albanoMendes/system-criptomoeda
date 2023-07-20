import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity({ name: 'rede' })
export class RedeEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'bank', nullable: false })
  bank: string;

  @Column({ name: 'titular', nullable: false })
  titular: string;

  @Column({ name: 'naccount', nullable: false })
  naccount: string;

  @Column({ name: 'idCrypto', nullable: false })
  idCryto: number;

  @CreateDateColumn({ name: 'create_at', nullable: false })
  createAt: Date;

  @CreateDateColumn({ name: 'update_at', nullable: false })
  updatedAt: Date;
}
